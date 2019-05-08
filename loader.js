const server = require('./server.js');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

server.app.use(bodyparser.urlencoded({ extended: true }), bodyparser.json());

require("./assets/scripts/jwt.js"); //corre o codigo do ficheiro (token)

//rotas
//server.app.use('/', require('/routes.js'));

mongoose.connect('mongodb+srv://fabio:KgBiSoGll2ev5YhA@cluster0-4nwqa.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
console.log('Connection state: ' + mongoose.connection.readyState);

module.exports = server;