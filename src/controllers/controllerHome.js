const {Productos} = require ('../models')


const controllers = {
    home: (req,res)=>{
        let productos = Productos.getAll()
        res.render('home', {productos})    
    }
}


module.exports = controllers;

// CONTROLLERS DE LA RUTA PRINCIPAL HOME, SERA REQUERIDA POR EL INDEX DEL CONTROLLERS