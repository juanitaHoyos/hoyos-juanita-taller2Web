var express = require('express');
var app= express();

//servidor
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const url = 'mongodb://localhost:27017';

const dbname = 'albatroz';

let db;

const client = new MongoClient(url, { useNewUrlParser: true });

client.connect(function(err){
    
    assert.equal(null, err);
    console.log("Connected successfully to server");
    
    db = client.db(dbname);
    
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
    
    var query = {};
    
    if(req.query.dias){
        query.dias = parseInt(req.query.dias);
    }
    

    if(req.query.estrellas){
        query.estrellas = parseInt(req.query.estrellas);
    }

    if(req.query.precio){
        query.precio = parseInt(req.query.precio);
    }
    
  
    const productos = db.collection('productos');
    
    productos.find(query,{}).toArray(function(err, docs){
        assert.equal(null,err);
        console.log('encontramos los docs');
        
        var contexto = {
            listaProductos: docs
        };
        res.render('store', contexto);        
    });
    
});

app.listen(3000,function(){
    console.log('hola!');
});