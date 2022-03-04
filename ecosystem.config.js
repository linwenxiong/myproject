module.exports = {
    apps: [
      {
        // 生产环境
        name: "prod",
        // 项目启动入口文件
        script: "./server.js",
        watch: true,
        "PORT": 80,
        // 项目环境变量
        env_production: {
          "NODE_ENV": "production"
        }
      }
  ] }