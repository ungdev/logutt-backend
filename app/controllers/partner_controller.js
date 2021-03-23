const Partner = require("../models/partner_model.js");
const jwt = require('jsonwebtoken');

exports.getAllPartner = function(req, res) {
  Partner.allPartners(function(err, data) {
    if (err)
      res.status(500).send(err);
    res.status(200).send(data);
  });
};

/**
 * C'était une méthode pour générer le token pour le front
exports.getToken = (req, res, next) => {
  console.log(res);
  res.status(200).json({
    appID: 'site-bde-front',
    token: jwt.sign(
      {appID: 'site-bde-front'},
      'RANDOM_TOKEN_SECRET'
    )
  })
  
}

exports.findAll = (req, res) => {
  Partner.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

*/