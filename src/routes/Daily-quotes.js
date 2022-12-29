const express = require('express');
const cors = require('cors');
const routerDaily = express.Router();
const dailyQuote = require('../DB/daily.json')
const {config} = require('../../config')
routerDaily.use(cors(
    config.application.cors.server
))
routerDaily.get('/', (req,res) =>{
    const max = dailyQuote.categorias.length;
    const numeroDaily = Math.floor((Math.random() * (max -0)));
    // console.log(numeroDaily)
    res.status(200).json(dailyQuote.categorias[numeroDaily])
})

module.exports.routerDaily = routerDaily;