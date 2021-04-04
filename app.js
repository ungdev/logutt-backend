const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-ALlow-Origin', '*');
    res.setHeader('Access-Control-ALlow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-ALlow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();

});

// Normal express config defaults
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./app/routes'));

module.exports = app;
