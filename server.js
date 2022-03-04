const fs = require('fs')
const path = require('path')
const express = require('express')
const { createServer: createViteServer } = require('vite')
const hostname = '0.0.0.0'
async function createServer(root = process.cwd(), isProd = process.env.NODE_ENV === 'production') {
    console.log("环境是", process.env.NODE_ENV);
    const app = express()
    const resolve = (p) => path.resolve(__dirname, p)
    const indexProd = isProd
        ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
        : ''
    const manifest = isProd
        ? // @ts-ignore
        require('./dist/client/ssr-manifest.json')
        : {}
    // 以中间件模式创建 Vite 应用，这将禁用 Vite 自身的 HTML 服务逻辑
    // 并让上级服务器接管控制
    //
    // 在中间件模式下，如果你想使用 Vite 自带的 HTML 服务
    // 请将 `middlewareMode` 设置为 `'html'` (具体请参考 https://cn.vitejs.dev/config/#server-middlewaremode)
    let vite
    if (!isProd) {
        vite = await createViteServer({
            root,
            logLevel: 'info',
            server: {
                middlewareMode: 'ssr',
                watch: {
                    // During tests we edit the files too fast and sometimes chokidar
                    // misses change events, so enforce polling for consistency
                    usePolling: true,
                    interval: 100
                }
            }
        })
        // 使用 vite 的 Connect 实例作为中间件
        app.use(vite.middlewares)
    } else {
        app.use(require('compression')())
        app.use(
            require('serve-static')(resolve('dist/client'), {
                index: false
            })
        )
    }

        app.use('*', async (req, res, next) => {
        try {
            const url = req.originalUrl
            let template, render
            if (!isProd) {
                // 1. 读取 index.html
                template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
                // 2. 应用 Vite HTML 转换。这将会注入 Vite HMR 客户端，
                //    同时也会从 Vite 插件应用 HTML 转换。
                //    例如：@vitejs/plugin-react 中的 global preambles
                template = await vite.transformIndexHtml(url, template)

                // 3. 加载服务器入口。vite.ssrLoadModule 将自动转换
                //    你的 ESM 源码使之可以在 Node.js 中运行！无需打包
                //    并提供类似 HMR 的根据情况随时失效。
                render = (await vite.ssrLoadModule('/src/entry-server.js')).render
            } else {
                template = indexProd
                render = require('./dist/server/entry-server.js').render
            }
            // 4. 渲染应用的 HTML。这假设 entry-server.js 导出的 `render`
            //    函数调用了适当的 SSR 框架 API。
            //    例如 ReactDOMServer.renderToString()
            const [appHtml, preloadLinks] = await render(url, manifest)

            // 5. 注入渲染后的应用程序 HTML 到模板中。
            const html = template
                .replace(`<!--preload-links-->`, preloadLinks)
                .replace(`<!--ssr-outlet-->`, appHtml)
            // 6. 返回渲染后的 HTML。
            res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
        } catch (e) {
            // 如果捕获到了一个错误，让 Vite 来修复该堆栈，这样它就可以映射回
            // 你的实际源码中。
            vite.ssrFixStacktrace(e)
            next(e)
        }
    })
    app.listen(80, hostname, () => {
        console.log("服务开启中");
    })
}

createServer()

