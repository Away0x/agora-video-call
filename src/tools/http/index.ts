import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';

import { API_ROOT } from '@/config';

interface HTTPUtilRequestConfig extends AxiosRequestConfig {}

/** 后端响应的数据格式 */
interface APIResponseData {
  code: number
  data: any
  msg: string
}

/** 整理后的数据格式 */
export interface CommonResponse<T = any> {
  status: boolean
  message: string
  data: T
}

const axios = Axios.create();
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config: HTTPUtilRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response: AxiosResponse<APIResponseData | string>) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

class HTTPUtil {
  private static _instance: HTTPUtil | null = null;

  public static instance(): HTTPUtil {
    if (this._instance === null) {
      this._instance = new this();
    }

    return this._instance!;
  }

  public returnCommonResp<T>(resp: APIResponseData): CommonResponse<T> {
    if (!resp) {
      return {
        status: false,
        message: '网络错误',
        data: null as any,
      };
    }

    return {
      status: resp.code === 200,
      message: resp.msg || '网络错误',
      data: resp.data,
    };
  }

  private async request<T>(config: HTTPUtilRequestConfig): Promise<APIResponseData> {
    try {
      config.url = API_ROOT + config.url;
      config.data = qs.stringify(config.data);

      const resp: AxiosResponse<APIResponseData> = await axios(config);

      return resp.data;
    } catch (err) {
      console.warn('Request error: ', err, config);
      return { code: -10000, msg: '网络错误', data: null };
    }
  }

  public async get<T>(config: HTTPUtilRequestConfig): Promise<APIResponseData> {
    return this.request<T>(Object.assign({}, config, { method: 'GET' }));
  }

  public async post<T>(config: HTTPUtilRequestConfig): Promise<APIResponseData> {
    return this.request<T>(Object.assign({}, config, { method: 'POST' }));
  }

}

export default HTTPUtil;
