const Tarefas = require('../Models/tarefas');

module.exports = (app, bd) => {
  
  app.get('/tarefas', (req, res) => {
    res.send("Tarefas");
  });

  app.get('/tarefas/:titulo', (req, res) => {
    for(let tarefa of bd.tarefas) {
      if(tarefa._titulo == req.params.titulo) {
        res.send(tarefa)
      }};
    res.send("Tarefa não encontrada!");
  })
  
  app.post('/tarefas', (req, res) => {
    const tarefa = new Tarefas(req.body.titulo, req.body.descricao, req.body.status, req.body.data);
    bd.tarefas.push(tarefa);
    res.send("ROTA POST DE TAREFAS ATIVA: TAREFA adicionado ao banco de dados.");
})
};


    