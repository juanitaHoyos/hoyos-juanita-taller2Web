
var listaProductos = [];

//localStorage.setItem('listaProductos', JSON.stringify(listaProductos));

if(localStorage.getItem('listaProductos') != null){
    listaProductos = JSON.parse(localStorage.getItem('listaProductos'));
}

var botonesAgregar = document.querySelectorAll('.agregar');
//console.log(botonesAgregar);

botonesAgregar.forEach(botonProducto => {
    //console.log(botonProducto.getAttribute("name"));
    botonProducto.addEventListener('click', function(event){
    event.preventDefault;      
      //console.log(this.getAttribute("name"));  
    //aqui se grega el producto al carrito

    var padre = this.parentNode;
    var nombre = padre.querySelector('.producto__nombre').innerText;
    var precio = padre.querySelector('.producto__precio').innerText;
    var imagen = padre.querySelector('.producto__imagen').src;
    var producto = {
        nombre: nombre,
        precio: precio,
        imagen: imagen,
    };
    
    listaProductos.push(producto);
    actualizarCarrito();
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));

    });

});

var carritoNum = document.querySelector('.carrito__num');
var listaCarrito = document.querySelector('.carrito-desplegado__lista');

function actualizarCarrito(){
console.log(listaProductos);
    
    carritoNum.innerHTML = listaProductos.length;
/*
    listaCarrito.innerHTML = '';
    listaProductos.forEach(function(producto){
       // listaCarrito.innerHTML += '<img src="' + producto.imagen + '" width="50">' + producto.nombre;
        listaCarrito.innerHTML +=  producto.nombre;
    });
    */
}

 actualizarCarrito();