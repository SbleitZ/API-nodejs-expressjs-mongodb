const express = require('express');
const cors = require('cors');
const routerCategorias = express.Router();
const { buscarCategoria } = require('../app') 
const {config} = require('../../config')
routerCategorias.use(cors(
    config.application.cors.server
))
routerCategorias.get('/:categoria', buscarCategoria)
// routerCategorias.get('/', (req,res) =>{
//     res.send("No disponible")
// })

module.exports.routerCategorias = routerCategorias;