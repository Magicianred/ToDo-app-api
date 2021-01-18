module.exports = (app) => {app.get('/usuarios', (req, res) => {
    res.send("rastreamento da aplicação feito com nodemon")
  })};

module.exports = (app) => {
  app.post('/usuarios', (req, res) => {
      res.send("ROTA POST DE USUARIOS ATIVA: usuario adicionado ao banco de dados.")
  })};
