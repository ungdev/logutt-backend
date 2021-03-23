const express = require('express');
const bodyParser = require('body-parser');
const partnerRoutes = require('./app/routes/partner_routes')

const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-ALlow-Origin', '*');
    res.setHeader('Access-Control-ALlow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-ALlow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();

});

app.use(bodyParser.json());

app.use('/api/partner', partnerRoutes);

module.exports = app;
