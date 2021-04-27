const ApiService = require('./api.service');

const ressource = 'https://fakercloud.com/schemas/property';

exports.post = (paramName) => ApiService.post(ressource, { name: paramName });
