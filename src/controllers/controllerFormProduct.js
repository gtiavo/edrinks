const {Productos} = require('../models')

const controllers = {
    forms: (req,res)=>{
        res.render('admin/formularioCreate');
    },
    create:(req,res)=>{
        let producto = {
            ...req.body,
            imagen:req.file.filename
        }
        let newProduct = Productos.create(producto) 
        res.send( newProduct)
    }
}

module.exports = controllers