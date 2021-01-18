module.exports = (app) => {app.get('/tarefas', (req, res) => {
    res.send("Taréfas");
  })};

  module.exports = (app) => {
    app.post('/tarefas', (req, res) => {
        res.send("ROTA POST DE TAREFAS ATIVA: TAREFA adicionado ao banco de dados.")
    })};
    