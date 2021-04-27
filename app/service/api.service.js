const axios = require('axios');

const ApiService = {
  setHeader(token) {
    axios.defaults.headers.common.Authorization = `Token ${token}`;
  },

  query(resource, params) {
    return axios.get(resource, params).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = '') {
    return axios.get(`${resource}/${slug}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return axios.put(`${resource}`, params);
  },

  delete(resource, slug) {
    return axios.delete(`${resource}/${slug}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

module.exports = ApiService;
