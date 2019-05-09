
var intPrecio = document.querySelector('#inputPrecio');

function buscarPorPrecio(){
    location.href = '/store?precio=' + intPrecio.value;
    console.log("puto el que lo lea");
}

if(intPrecio){
    intPrecio.addEventListener('change', buscarPorPrecio);
}

var titulos = document.querySelectorAll(".producto__nombre");

titulos.forEach(titulo => {
   // console.log(titulo.innerHTML);
 var  str= titulo.innerHTML;
titulo.innerHTML=str.toUpperCase();
    
});