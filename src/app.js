const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "./views")); 

app.use(express.static(path.join(__dirname,'./public')));



app.use('/', require('./routes/index.routes'))



module.exports= app