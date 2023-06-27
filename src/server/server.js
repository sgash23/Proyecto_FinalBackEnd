const express = require('express');
const router = require('../routes/router');
const getFecha = require('../utils/getFechayHora');
const server = express();

server.use(express.json()); 
server.use(getFecha);
server.use('/api', router);

module.exports = server;