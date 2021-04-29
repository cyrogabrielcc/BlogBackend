const app = require('express')();
const consign = require('consign');
const db = require('./config/db')

//knex como parâmetro
app.db = db;

//consign -> "injeçao de dependencia"
consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

//ligando o backend para ele executar em uma porta
app.listen(3000, () => {console.log('backend executando...')});





















