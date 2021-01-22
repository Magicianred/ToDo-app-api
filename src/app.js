// importando as libs express e bodyParser(é um middleware para parsear json)
const express = require('express')
const bodyParser = require('body-parser');


const app = express()
const port = 3001
app.use(bodyParser.json());


const usuariosController = require("./Controllers/usuarios-controller");
const tarefasController = require("./Controllers/tarefas-controller");
const bd = require("./infra/bd");


usuariosController(app, bd);
tarefasController(app, bd);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

