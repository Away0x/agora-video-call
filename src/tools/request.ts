import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';
// import qs from 'qs';

// import { API_ROOT } from '@/config';
import { Singleton } from '@/tools/Singleton';
import { serviceErrorMap } from '@/constants';
import { localStorage as storage } from '@/tools/storage';

interface HTTPUtilRequestConfig extends AxiosRequestConfig {}

const JWT_STORAGE_KEY = 'jwt';

const axios = Axios.create({
  // baseURL: API_ROOT,
  timeout: 10000,
  headers: {
    access_token: storage.read(JWT_STORAGE_KEY),
  },
});
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config: HTTPUtilRequestConfig) => { return config; },
  (error) => { return Promise.reject(error); },
);

axios.interceptors.response.use(
  (response: AxiosResponse) => { return response; },
  (err) => {
    if (!err.response) {
      if (err.message) {
        message.error(err.message);
      }
      throw err;
    }

    if (err.response.status === 400) {
      message.error('Authentication Error(code: 400), try joining again');
      storage.clearAll();
      setTimeout(() => {
        storage.clearAll();
        window.location.reload();
        window.location.hash = '';
      }, 1500);
    } else {
      if (err.response.data.error) {
        if (serviceErrorMap[err.response.data.error]) {
          message.error(serviceErrorMap[err.response.data.error]);
        }
      }
    }
    return Promise.reject({
      code: err.response.data.error,
      desc: err.response.data.errorMsg
    });
  },
);

class Request extends Singleton {

  public async request<T>(config: HTTPUtilRequestConfig): Promise<T> {
    // config.data = qs.stringify(config.data);
    const resp = await axios(config);
    return resp.data;
  }

  public async get<T = any>(config: HTTPUtilRequestConfig): Promise<T> {
    return this.request({...config, ...{method: 'GET'}});
  }

  public async post<T = any>(config: HTTPUtilRequestConfig): Promise<T> {
    return this.request({...config, ...{method: 'POST'}});
  }

}

export const updateRequestToken = (jwt: string) => {
  axios.defaults.headers.access_token = jwt;
  storage.save(JWT_STORAGE_KEY, jwt);
};

export const clearRequestToken = () => {
  storage.clear(JWT_STORAGE_KEY);
};

export const getRequestToken = () => {
  return storage.read(JWT_STORAGE_KEY);
};

export const setRequestMaxTimeout = (ms: number) => {
  axios.defaults.timeout = ms;
};

export const request = Request.instance<Request>();
