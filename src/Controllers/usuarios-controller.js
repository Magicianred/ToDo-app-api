const Usuarios = require("../Models/usuarios");

module.exports = (app, bd) => {
  
  app.get('/usuarios', (req, res) => {
    res.send(bd.usuarios);
  });

  app.get('/usuarios/:email', (req, res) => {
    for(let usuario of bd.usuarios) {
      if (usuario._email == req.params.email){
        res.send(usr);
      }
    }
    res.send("Usuario não encontrado!");
  });

  app.post('/usuarios', (req, res) => {
    res.send("ROTA POST DE USUARIOS ATIVA: usuario adicionado ao banco de dados.")
    const usr = new Usuarios(req.body.nome, req.body.email, req.body.senha);
    bd.usuarios.push(usr);
    
  });
  
  app.delete('/usuarios/:email', (req, res) => {
    
    let bancoFiltrado = [];
    for(let i = 0; i < bd.usuarios.length; i++) {
      if(req.params.email != bd.usuarios[i]._email) {
        bancoFiltrado.push(bd.usuarios[i]);
      }
    }
    if(bd.usuarios.length != bancoFiltrado.length) {
      bd.usuarios = bancoFiltrado;
      res.send(`Usuario ${req.params.email} foi removido!`)
    } else {
      res.send(`Usuario ${req.params.email} encontrado!`);
    }
  })
  
};