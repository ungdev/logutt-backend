var router = require('express').Router();
const authCtrl = require('../controllers/auth_controller');


router.use('/api', require('./api'));

router.get('/token', authCtrl.getToken);


module.exports = router;
