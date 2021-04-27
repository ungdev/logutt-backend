const router = require('express').Router();
const fixture = require('../models/dataFixtures');

router.use('/api', require('./api'));

router.get('/fixture', fixture.generateData);

module.exports = router;
