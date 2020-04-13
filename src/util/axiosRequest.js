import axios from 'axios';

// 判断当前环境
// eslint-disable-next-line import/prefer-default-export
export function getENV() {
  // 1.测试环境  2本地 3线上
  const url = window.location.origin;
  // eslint-disable-next-line no-nested-ternary
  return url.indexOf('34.128.16.6') > -1 ? 1 : url.indexOf('localhost') > -1 ? 2 : 3;
}

const host = window.location.origin;
const http = {};

const instance = axios.create({
  baseURL: getENV() === 2 ? '/api' : `${host}/xkpJds/rest`,
  timeout: 10000,
  headers: {
    'content-Type': 'application/json;charset=UTF-8',
    Pragma: 'no-cache',
    'Cache-Control': 'no-cache, no-store',
  },
});

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 添加公共的请求参数
  const params = {
    source: 9,
    channelid: 22,
  };
  // eslint-disable-next-line no-param-reassign
  config.data = JSON.stringify(config.data);
  // eslint-disable-next-line eqeqeq
  if (config.method == 'get') {
    // eslint-disable-next-line no-param-reassign
    config.params = { ...config.params, ...params };
  }
  return config;
}, (err) => {
  console.log('请求超时!');
  return Promise.resolve(err);
});

// 响应拦截器即异常处理
instance.interceptors.response.use((response) => response, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log('错误请求');
        break;
      case 401:
        console.log('未授权，请重新登录');
        break;
      case 403:
        console.log('拒绝访问');
        break;
      case 404:
        console.log('请求错误，未找到该资源');
        break;
      case 405:
        console.log('请求方法未允许');
        break;
      case 500:
        console.log('服务端出错');
        break;
      case 501:
        console.log('网络未实现');
        break;
      case 502:
        console.log('网络错误');
        break;
      case 503:
        console.log('服务不可用');
        break;
      case 504:
        console.log('网络超时');
        break;
      case 505:
        console.log('http版本不支持该请求');
        break;
      default:
        console.log('错误$(err.response.status)');
    }
  } else {
    console.log('连接服务器失败');
  }
  return Promise.resolve(err);
});

// 封装方法
// eslint-disable-next-line func-names
http.get = function (url, params) {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((response) => {
      resolve(response.data);
    })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        reject(err);
      });
  });
};
// eslint-disable-next-line func-names
http.post = function (url, data) {
  return new Promise((resolve, reject) => {
    instance.post(url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        reject(err);
      });
  });
};
// eslint-disable-next-line func-names
http.patch = function (url, data) {
  return new Promise((resolve, reject) => {
    instance.patch(url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        reject(err);
      });
  });
};
// eslint-disable-next-line func-names
http.put = function (url, data) {
  return new Promise((resolve, reject) => {
    instance.put(url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        reject(err);
      });
  });
};

export default http;
