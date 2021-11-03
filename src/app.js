const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "./views")); 

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname,'./public')));
// express.json() es un método incorporado en express para reconocer el objeto de solicitud entrante como objeto JSON.
app.use(express.json());
//  express. urlencoded() es un método incorporado en express para reconocer el objeto de solicitud entrante como cadenas o matrices.
app.use(express.urlencoded({extended:false}));



app.use('/', require('./routes/index.routes'))



module.exports= app