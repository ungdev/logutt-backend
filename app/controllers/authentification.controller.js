const axios = require('axios');
const etuService = require('../service/etuUtt.service');

const API_URL = 'https://etu.utt.fr/api/';
const CLIENT_ID = 34828484350;
const CLIENT_SECRET = 'bc2815c09891fe4e79b4977b4416fb7d';

exports.login = async (req, res) => {
  if (!req.body || !req.body.code) {
    res.status(400).send({
      message: 'Body need code!',
    });
  }

  const { code } = req.body;

  const requestToken = await axios
    .post(
      `${API_URL}oauth/token`,
      `grant_type=authorization_code&&authorization_code=${code}`,
      {
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
        },
      }
    )
    .then((response) => response.data)
    // TODO TRAITEMENT ERREUR
    .catch(() => {
      console.log('erreur connection site etu');
      res.status(400).send({
        message: 'Erreur get token',
      });
    });

  const token = requestToken.access_token;

  const userEtu = await etuService.user
    .getCurrentAccount(token)
    .then((response) => response.data.data)
    .catch((err) => {
      res.status(400).send({
        message: 'Erreur get user',
      });
      console.log(err);
    });

  const currentUser = {
    id: userEtu.studentId,
    firstName: userEtu.firstName,
    lastName: userEtu.lastName,
    phone: userEtu.phone,
    email: userEtu.email,
    token,
  };

  res.json({ user: currentUser });
};
