
var intPrecio = document.querySelector('#inputPrecio');

function buscarPorPrecio(){
    location.href = '/store?precio=' + intPrecio.value;
    console.log("puto el que lo lea");
}

if(intPrecio){
    intPrecio.addEventListener('change', buscarPorPrecio);
}
