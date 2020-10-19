const express = require('express')

const autorizacao = require('./services/autorizacao')

const sessaoController = require('./controllers/sessao')

const usuarioController = require('./controllers/usuario')
const atualizarSenhaController = require('./controllers/atualizarSenha')

const coberturaController = require('./controllers/cobertura')

const recheioController = require('./controllers/recheio')

const saborController = require('./controllers/sabor')

const uploader = require('./services/uploader')

const boloController = require('./controllers/bolo')
const filtrarBoloPorIdController = require('./controllers/filtrarBoloPorId')
const filtrarBoloPorCaracteristicaController = require('./controllers/filtrarBoloPorCaracteristica')
const filtrarBoloPorNomeController = require('./controllers/filtrarBoloPorNome')

const mensagemController = require('./controllers/mensagem')
const atualizaStatusMensagemController = require('./controllers/atualizaStatusMensagem')

const sugestaoController = require('./controllers/sugestao')

const router = express.Router()

router.get('/', (req, resp, next) => {
    resp.json({
        message: `Api rodando no endereco: ${ process.env.URL }...`
    })
})

/* Rota de login */
router.post('/login', sessaoController.create)

/* Rotas de usuario */
router.get('/usuario', autorizacao.authorize(), usuarioController.index)
router.post('/usuario', autorizacao.authorize(), usuarioController.create)
router.put('/usuario/:id', autorizacao.authorize(), atualizarSenhaController.update)
router.put('/usuario/:id', autorizacao.authorize(), usuarioController.update)
router.delete('/usuario/:id', autorizacao.authorize(), usuarioController.delete)

/* Rotas de cobertura */
router.get('/cobertura', coberturaController.index)
router.post('/cobertura', autorizacao.authorize(), coberturaController.create)

/* Rotas de recheio */
router.get('/recheio', recheioController.index)
router.post('/recheio', autorizacao.authorize(), recheioController.create)

/* Rotas de sabor */
router.get('/sabor', saborController.index)
router.post('/sabor', autorizacao.authorize(), saborController.create)

/* Rotas de bolo */
router.get('/bolo', filtrarBoloPorNomeController.index)
router.get('/bolo', filtrarBoloPorCaracteristicaController.index)
router.get('/bolo', boloController.index)
router.get('/bolo/:id', filtrarBoloPorIdController.index)
router.post('/bolo',/*  autorizacao.authorize(), */ uploader, boloController.create)
router.put('/bolo/:id',/*  autorizacao.authorize(), */ uploader, boloController.update)

/* Rotas de mensagem */
router.get('/mensagem', mensagemController.index)
router.post('/mensagem', mensagemController.create)
router.put('/mensagem/:id', autorizacao.authorize(), atualizaStatusMensagemController.update)

/* Rotas de sugestao */
router.get('/sugestao', autorizacao.authorize(), sugestaoController.index)
router.post('/sugestao', sugestaoController.create)


module.exports = router