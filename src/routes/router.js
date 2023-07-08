const express = require('express');
const { addFuncionario } = require('../controller/addFuncionario');
const { getFuncionario, getNombreFuncionario } = require('../controller/getFuncionario');
const { borrarFuncionario } = require('../controller/deletFuncionario');
const { actualizarFuncionario } = require('../controller/putFuncionario');
const expressValidator = require("express-validator");
const validator = require('../utils/validacion');

const router = express.Router();

router.post('/agregar', 

//Validación para ingresar un nombre correcto.
expressValidator
.body("nombre")
.isString()
.isLength({ min: 5, max: 20 })
.withMessage(
  "El nombre del funcionario debe ser un string y debe contener entre 5 y 20 caracteres."
),

//Validación para ingresar un codigo de funcionario correcto.
expressValidator
.body("codFuncionario")
.isNumeric()
.isLength({ min: 5, max: 20 })
.withMessage(
  "El Código del funcionario debe ser numerico y debe contener entre 5 y 20 caracteres."
),
validator, addFuncionario);
router.get('/leer', getFuncionario);
router.get('/leer/:nombre', getNombreFuncionario);
router.delete('/eliminar/:codFuncionario', borrarFuncionario);
router.put('/actualizar/:nombre', 

//Validación para actualizar un nombre correcto.
expressValidator
.body("nombre")
.isString()
.isLength({ min: 5, max: 20 })
.withMessage(
  "El nombre del funcionario debe ser un string y debe contener entre 5 y 20 caracteres."
),
validator
,actualizarFuncionario);

module.exports = router;



