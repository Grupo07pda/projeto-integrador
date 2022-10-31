const express= require('express');
const usuarioRoute = express.Router();

const criar= require('../controllers/usuarios/criarUsuario')
const pegar = require('../controllers/usuarios/pegarUsuario')
const alterar = require('../controllers/usuarios/alterarUsuario')
const deletar = require('../controllers/usuarios/deletaUsuario')
const login= require('../controllers/usuarios/loginUsuario')
const pegandoUsuario = require('../controllers/usuarios/pegarUsuario')

usuarioRoute.post("/usuario", criar);
usuarioRoute.get("/usuario", pegar);
usuarioRoute.get("/usuario/:id", pegandoUsuario);
usuarioRoute.put("/usuario/:id", alterar);
usuarioRoute.delete("/usuario/:id", deletar)
usuarioRoute.post("/login", login)

module.exports = usuarioRoute;  