const {Productos} = require ('../models')

const controllers = {
    novedades: (req, res)=>{
        let productos = Productos.getAll();
        let products =productos.filter(item => item.categoria == "novedades");
        res.render('products/productList', {productos : products})
    },
    ofertas: (req, res)=>{
        let productos = Productos.getAll();
         let products =productos.filter(item => item.categoria == "ofertas");
        res.render('products/productList', {productos : products})
    },
    detail:(req,res)=>{
        let productos = Productos.getAll();
         let products =productos.find(item => item.id == req.params.id);
        res.render('products/productDetail', {productos : products})
    }
}


module.exports = controllers;