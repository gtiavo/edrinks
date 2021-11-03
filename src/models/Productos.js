let db = require('../db/products.json')
const fs = require('fs');
const path = require('path');

const modelsProducts = {
   getAll: ()=>{
        return db
         
    },
    
    filname:path.join(__dirname,'../db/products.json'),


    getData: function (){
       return JSON.parse(fs.readFileSync(this.filname, 'utf-8'))
    },
    
    findAll: function(){
      return this.getData()
    },

   idGenerator:function(){
    let allPrducts = this.findAll();
    let lastProduct = allPrducts.pop();
    if(lastProduct){
      return lastProduct.id + 1
    }
    return 1
    },
    
    
    create:function (data){
      let  list = this.findAll()
      let newData={
        id:this.idGenerator(),
        ...data
      }
      list.push(newData)
      fs.writeFileSync(this.filname,JSON.stringify(list, null, ' '))
      return newData
      
    }  
    
    
}






module.exports = modelsProducts;