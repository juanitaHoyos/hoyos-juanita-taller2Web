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
        query.precio = { $lte: parseInt(req.query.precio) };
    } 
  
    const productos = db.collection('productos');
    
    productos.find(query,{}).toArray(function(err, docs){
        assert.equal(null,err);
        console.log('encontramos los docs');
        
        var contexto = {
            listaProductos: docs,
            valorInput: req.query.precio|1000
        };
        res.render('store', contexto);        
    });
    
});

app.get('/producto/:nombre', function(req, res){
    
    const productos = db.collection('productos');

    productos.find({nombre: req.params.nombre},{}).toArray(function(err, docs){
        assert.equal(null,err);
        console.log('encontramos los docs');
        
        console.log(docs[0]);

        var contexto = docs[0];

        res.render('producto', contexto);        
    });
    
});

app.get('/carrito', function(req, res){
    
    res.render('carrito');
    
});

app.get('/checkout', function(req, res){
    
    res.render('checkout');
    
});
 
//CHECKOUT
app.post('/login',function(request,response){
    var pedido = {
        productos:JSON.parse(request.body.productos)
    }

    var collection = db.collection('pedidos');
    collection.insertOne(pedido, function(err){
        assert.equal(err, null);

        console.log('pedido guardado');
    });
    response.redirect('/home');

});
app.listen(3000,function(){
    console.log('hola!');
});