import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:3000/json/",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
});
instance.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    const handleConfig = Object.assign({}, config);
    handleConfig.headers.sessionid = 5566;
    return handleConfig
}, (error) => {
    // 对请求错误做些什么
    alert(3)
    console.log(error, 5566);
    return Promise.reject("错误")
})
instance.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
}, (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
})
export default instance