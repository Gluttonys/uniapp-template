import axios from "axios";

const request = axios.create({
  baseURL: '',
  headers: {
    token: ''
  },
  timeout: 5_000,
  timeoutErrorMessage: '请求已超时',
  responseType: 'json',
})


request.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})


request.interceptors.response.use((response) => {
  return response
}, error => {
  return Promise.reject(error)
})

export default request
