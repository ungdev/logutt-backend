const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const partnerCtrl = require('../controllers/partner_controller');


router.get('/', auth, partnerCtrl.getAllPartner) //Route de tous les partenaires
//router.get('/token', partnerCtrl.getToken) //Génère le token



module.exports = router;