var express = require('express');
var app= express();

//servidor
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbname = 'albatroz';
const client = new MongoClient(url);
client.connect(function(err){

    assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbname);

  const productos = db.collection('productos');
  productos.find({}, {sort:['precio']}).toArray(function(err,docs){
    assert.equal(null,err);
    console.log('encontramos los docs');
   docs.forEach(function(prod){

    console.log(prod.precio);
   });


  });

  client.close();

});

var motorRender = require('express-handlebars');

app.use(express.static('public'));
app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');

/* read JSON */
const fs = require('fs');

let fileReaded = fs.readFileSync('productos.json');  
let productos = JSON.parse(fileReaded); 


app.get('/', function(req, res){

    res.render('home');
    
});

app.get('/store', function(req,res){
    var contexto = {
        listaProductos: productos
    };
    res.render('store', contexto);
});

app.listen(3000,function(){
console.log('hola!');
});