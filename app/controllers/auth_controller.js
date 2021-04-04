const jwt = require('jsonwebtoken');

exports.getToken = (req, res, next) => {
    console.log(res);
    res.status(200).json({
      appID: process.env.API_APPID,
      token: jwt.sign(
        {appID: process.env.API_APPID},
        process.env.API_SECRET
      )
    })
}