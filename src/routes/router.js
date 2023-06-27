const express = require('express');
const { addFuncionario } = require('../controller/addFuncionario');
const { getFuncionario, getNombreFuncionario } = require('../controller/getFuncionario');
const { borrarFuncionario } = require('../controller/deletFuncionario');
const { actualizarFuncionario } = require('../controller/putFuncionario');

const router = express.Router();

router.post('/agregar', addFuncionario);
router.get('/leer', getFuncionario);
router.get('/leer/:nombre', getNombreFuncionario);
router.delete('/eliminar/:codFuncionario', borrarFuncionario);
router.put('/actualizar/:nombre', actualizarFuncionario);

module.exports = router;



