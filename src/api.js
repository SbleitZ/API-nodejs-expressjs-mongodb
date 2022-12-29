//

const cat = require('./DB/backup.json')
//Paquetes
const express = require('express');
const cors = require('cors');
//funciones para la api
const {crear, buscarTodo, actualizar, buscarUno, eliminar} = require('./app.js')
//rutas
const {routerCategorias} = require('./routes/categorias');
const {routerDaily} = require('./routes/Daily-quotes.js');
//config del cors
const {config} = require('../config')
//declaración app
const app = express();
const URL = process.env.PORT || 3000;
//ruta categorias
app.use('/api/daily', routerDaily);
app.use('/categorias', routerCategorias);
//Para peticiones sin problemas de cors
app.use(cors(
    config.application.cors.server
));
app.use(express.json());
//Para sin problema de JSON
app.get('/', buscarTodo)
app.get('/:id', buscarUno)
app.post('/', crear);
app.patch('/:id', actualizar)
app.delete('/:id', eliminar)
app.get('/api/categorias', (req,res) =>{
    res.status(200).send(cat.categorias)
})

app.get('*', (req,res) =>{
    res.status(200).send("Error 404")
})
app.listen(URL, () =>{
    //Puedes borrar el callback si lo deseas
    console.log("Escuchando...")
})