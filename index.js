var express = require('express');
var app= express();

var motorRender = require('express-handlebars');

app.use(express.static('public'));
app.engine('handlebars', motorRender());
app.set('view engine', 'handlebars');

app.get('/', function(req, res){

    res.render('home');
    
});

app.get('/store', function(req,res){
    res.render('store');
});

app.listen(3000,function(){
console.log('hola!');
});