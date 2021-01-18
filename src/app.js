const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3001
app.use(bodyParser.json());
const usuariosController = require("./Controllers/usuarios-controller");
const tarefasController = require("./Controllers/tarefas-controller");

usuariosController(app);
tarefasController(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

