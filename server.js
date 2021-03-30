/*
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// Route
app.get('/', (req, res) => res.json({message: 'Hello World!'}));

app.post('/', (req, res) => res.json({message: 'Hello World POST!'}));


// set port, listen for requests

require("./app/routes/partner_routes.js")(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

*/

const http = require('http');
const app = require('./app');

const normalizePort = val => {
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }

    return false;
};

const port = normalizePort(process.env.PORT || 3000 )
app.set('port', port);

const errorHandler = error => {
    if(error.syscall !== 'listen'){
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCESS':
            console.log(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

const server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port' + port;
    console.log('Listening on ' + bind);
})

server.listen(port);