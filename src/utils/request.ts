import axios from 'axios'
import type { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios'

interface RequestType {
  path: string
  data?: any
  headers?: any
  configs?: AxiosRequestConfig
}

class Http {
  //axios实例
  provider: AxiosInstance
  //基础配置
  baseConfig: AxiosRequestConfig = { baseURL: '/api', timeout: 60000 }

  constructor(baseURL?: string, headers?: any, configs?: AxiosRequestConfig) {
    const provider: AxiosInstance = axios.create({
      baseURL,
      // 毫秒
      timeout: 1200000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        ...headers
      },
      ...configs
    })
    provider.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        //请求拦截添加token，进行身份验证
        return config
      },
      (err: any) => {
        return Promise.reject(err)
      }
    )
    provider.interceptors.response.use(
      (res: AxiosResponse) => {
        const { code } = res.data
        if (code < 200 || code > 300) {
          if (code === 401) {
            //需登录
            return Promise.reject('error')
          }
          return Promise.reject('error')
        }
        return res.data
      },
      (err: any) => {
        const { code, message = '未知错误' } = err?.response?.data ?? {}
        if (code) {
          if (code == 401) {
            //退登
          } else if (code == 403) {
            //
          } else {
            console.log(message)
          }
        } else if (err.toString().indexOf('Error: timeout') !== -1) {
          //超时
          // QVNotification({ title: 'error', message: i18n.global.tm('utils.networkTimeout'), duration: 2500 })
        } else if (err.toString().indexOf('Error: Network Error') !== -1) {
          //网络错误
          // QVNotification({ title: 'error', message: i18n.global.tm('utils.networkError'), duration: 2500 })
        } else {
          //未知
          // QVNotification({ title: 'error', message: msg, duration: 2500 })
        }
        return Promise.reject(err)
      }
    )
    this.provider = provider
  }
  async get(path: string, data?: any, headers?: any, configs?: AxiosRequestConfig) {
    return this.provider.get(path, { params: data, headers, ...configs })
  }
  async put(path: string, data: any, headers?: any, configs?: AxiosRequestConfig) {
    return this.provider.put(path, data, { headers, ...configs })
  }
  async patch(path: string, data: any, headers?: any, configs?: AxiosRequestConfig) {
    return this.provider.patch(path, data, { headers, ...configs })
  }
  async post(path: string, data: any, headers?: any, configs?: AxiosRequestConfig) {
    return this.provider.post(path, data, { headers, ...configs })
  }
  async delete(path: string, data: any, headers?: any, configs?: AxiosRequestConfig) {
    return this.provider.post(path, { data, headers, ...configs })
  }
  async file(path: string, data: any, headers?: any, configs?: AxiosRequestConfig) {
    return this.provider.postForm(path, data, { headers, ...configs })
  }
}

export const createHttp = () => {
  // return new Http(import.meta.env.VITE_APP_BASE_API)
  return new Http()
}

const GET = ({ path, data, headers, configs }: RequestType) => {
  return createHttp().get(path, data, headers, configs)
}

const DELETE = ({ path, data, headers, configs }: RequestType) => {
  return createHttp().delete(path, data, headers, configs)
}

const POST = ({ path, data, headers, configs }: RequestType) => {
  return createHttp().post(path, data, headers, configs)
}

const PUT = ({ path, data, headers, configs }: RequestType) => {
  return createHttp().put(path, data, headers, configs)
}

const PATCH = ({ path, data, headers, configs }: RequestType) => {
  return createHttp().patch(path, data, headers, configs)
}

const FILE = ({ path, data, headers, configs }: RequestType) => {
  headers = { ...headers, 'Content-Type': 'multipart/form-data' }
  return createHttp().file(path, data, headers, configs)
}

export default {
  get: GET,
  post: POST,
  put: PUT,
  patch: PATCH,
  delete: DELETE,
  file: FILE
}
