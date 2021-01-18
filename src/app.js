const express = require('express')
const app = express()
const port = 3001
const usuariosController = require("./Controllers/usuarios-controller");
const tarefasController = require("./Controllers/tarefas-controller");

usuariosController(app);
tarefasController(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

