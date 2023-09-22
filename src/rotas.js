const express = require('express');
const { cadastrarUsuario, login, editarUsuario, detalharUsuario } = require('../controladores/usuarios');
const verificaLogin = require('../intermediarios/verificaLogin')
const listarCategorias = require('../controladores/categorias');
const { listarTransacoes, detalharTransacao, cadastrarTransacao, atualizarTransacao, deletarTransacoes, extratoTransacoes } = require('../controladores/transacoes');

const rotas = express();


// cadastrar usuario
rotas.post('/usuario', cadastrarUsuario);

// fazer login
rotas.post('/login', login);

// validação do token 
rotas.use(verificaLogin)

// detalhar perfil do usuario
rotas.get('/usuario', detalharUsuario);

// editar perfil do usuario
rotas.put('/usuario', editarUsuario);

// listar categorias
rotas.get('/categoria', listarCategorias);

// listar transações
rotas.get('/transacao', listarTransacoes);

// obter extrato das transações
rotas.get('/transacao/extrato', extratoTransacoes);

// detalhar transação
rotas.get('/transacao/:id', detalharTransacao);

// cadastrar transação
rotas.post('/transacao', cadastrarTransacao);

// editar transação
rotas.put('/transacao/:id', atualizarTransacao);

// remover transação
rotas.delete('/transacao/:id', deletarTransacoes);


module.exports = rotas

