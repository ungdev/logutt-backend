const fixture = require('../models/dataFixtures')
var router = require('express').Router();

router.use('/api', require('./api'));
router.get('/fixture', fixture.generateData);

module.exports = router;
