const axios = require('axios');

const API_URL = 'https://etu.utt.fr/api/';

const user = {
  getCurrentAccount(token) {
    return axios.get(`${API_URL}private/user/account`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

module.exports = {
  user,
};
