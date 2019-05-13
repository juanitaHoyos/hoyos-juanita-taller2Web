
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
    var nombre = padre.querySelector('.productoF__nombre').innerText;
    var precio = padre.querySelector('.productoF__precio').innerText;
    var imagen = padre.querySelector('.productoF__imagen').src;
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

var botonesAgregarProducto = document.querySelectorAll('.comprar__botonC');
botonesAgregarProducto.forEach(botonProducto => {
    //console.log(botonProducto.getAttribute("name"));
    botonProducto.addEventListener('click', function(event){
    event.preventDefault;      
      //console.log(this.getAttribute("name"));  
    //aqui se grega el producto al carrito

    var padre = this.parentNode;
    var nombre = document.querySelector('.producto__nombre').innerText;
    var precio = document.querySelector('.producto__precio').innerText;
    var imagen = document.querySelector('.primera').getAttribute('data-src');
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
        if(listaCarrito !=null){
            listaCarrito.innerHTML = '';
            listaProductos.forEach(function(producto,index){
                    listaCarrito.innerHTML +=  `
                    
                     
                    <div class="productoF">
                    <a class="productoF-link" href="/producto/${nombre}">
                    
                    <img  class="productoF__imagen" src=${urlImg} alt="">
                    </a>
                    
                    <h3 class="productoF__nombre">${nombre}</h3>
                    <h5 class="productoF__precio">${precio}</h5>
                    <button name="${nombre}" class="agregar">Agregar</button>
    
                </div>
            
                    

                    `

                
            });
            
            
        }
  
}

 actualizarCarrito();