
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
    
    let tataraabuelo = this.parentNode;
    let abuelo = tataraabuelo.parentNode;
    let padre = abuelo.parentNode;
    console.log(padre);
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
                    <div class="contenedor">
                            <div class="productoF">
                            <a class="productoF-link" href="/producto/${producto.nombre}">
                            
                            <img  class="productoF__imagen" src=${producto.imagen} alt="">
                            </a>
                            <div class="productoF__cont"> 
                            <h3 class="productoF__nombre">${producto.nombre}</h3>
                            <h5 class="productoF__precio">${producto.precio}</h5>
                            </div>
            
                            </div>
                    </div>
                     
                    

                
            
                    

                    `

                
            });
            
            
        }

        let precios = document.querySelectorAll(".productoF__precio");
   
        let precio = 0;
        let text_precio = "";
        let actual__total = localStorage.getItem("totalPagar");
        if(actual__total != null){
            text_precio = actual__total;
        }

        if(precios != null && precios.length > 0){
        
            precio = 0;
            precios.forEach((p, i)=>{
                let ori = (p.innerText);
                let pre = ori.split("$");
                let num = parseInt(pre[1]);
              
                precio += num;
            });
        
            text_precio = "Total a pagar: $" + precio;
            localStorage.setItem("totalPagar", text_precio);
        }

        
        let zona__precio = document.querySelectorAll(".view__texto");
        if(zona__precio != null){
            zona__precio.forEach((p)=>{
                p.innerHTML = text_precio;
            });
           
        }
  
}

 actualizarCarrito();