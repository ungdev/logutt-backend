const ApiService = require("./api.service");

const ressource = "https://fakercloud.com/schemas/property"

exports.post = (paramName) => {
  return ApiService.post(ressource, {"name": paramName});
}

  