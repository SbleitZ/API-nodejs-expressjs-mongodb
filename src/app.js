//Aqui debe de ir el URI de tu base de datos
const mongoURI = 'INSERTA_URI'

const mongoose = require('mongoose')
mongoose.connect(mongoURI, (err) =>{
    if(err){
        console.log("\x1b[31m","******** Error de conexión ******** ");
        console.log(err);
    }else{
        console.log("\x1b[32m",'******** Conexión exitosa ********');
    }
})
//nombre de modelo y luego el objeto
const Publicacion = mongoose.model('Publicacion', {
    autor: String,
    mensaje: String,
    like: Boolean,
    fecha: String,
    up: Number,
    categoria: String
})

/**
 * @author -> Sbleit , https://portafolio-murex-theta.vercel.app
 * @see 1.0 https://github.com/SbleitZ
 */
//Uso exclusivo de las routes
const buscarCategoria = async (req,res) => {
    const _categoria = req.params.categoria
    const ip = req.connection.remoteAddress
    const resData = await Publicacion.find({categoria: _categoria})
    if(resData.length === 0){
        return res.status(404).send("Dato no encontrado")
    }
    res.status(200).send(resData)
}


/**
 * @HOME -> USO EXCLUSIVO DEL HOME PRINCIPAL
 */
const crear = async (req,res) => {
    const body = req.body;
    const publicacion = new Publicacion(body)
    const savedPublicacion = await publicacion.save()
    res.status(200).send(savedPublicacion);
    console.log("Enviado")

}


const buscarTodo = async (req,res) => {
    try{
        const publicaciones = await Publicacion.find()
        // console.log(publicaciones[0]["_id"].toString())
        // console.log(publicaciones)
        res.status(200).send(publicaciones)
    }catch(err){
        console.log(err)
    }
}


const buscarUno = async (req,res) => {
    const ID = req.params.id
    const user = await Publicacion.findOne({_id: ID})
    res.status(200).send(user)

}

const actualizar = async (req,res) => {
    const body = req.body
    const ID = req.params.id
    const publicacion = await Publicacion.findOne({_id: ID})
    Object.assign(publicacion,body)
    await publicacion.save()
    res.status(200).send(publicacion)
}


const eliminar = async (req,res) => {
    const ID = req.params.id
    const publicacion = await Publicacion.findOne({_id: ID})
    console.log(publicacion)
    if(publicacion){
        await publicacion.remove()
    }
}
//para POST
module.exports.crear = crear
//Para GET
module.exports.buscarTodo = buscarTodo
//Para patch
module.exports.actualizar = actualizar
//para get por id
module.exports.buscarUno = buscarUno
//eliminar por id
module.exports.eliminar = eliminar


//exportando rutas
module.exports.buscarCategoria = buscarCategoria;