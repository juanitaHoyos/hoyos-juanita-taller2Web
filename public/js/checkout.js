window.addEventListener('load', function(){

    var form=document.querySelector('form');
    function enviarProductos(evento){
        console.log=('hola');

        var input = document.querySelector('.input-confirmar');
        input.value = localStorage.stringify('productos');

        localStorage.removeItem('productos');
    }
    form.addEventListener('submit', enviarProductos);

});