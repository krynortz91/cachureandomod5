import {Producto} from '/js/Producto.js';
import {Carrito} from '/js/Carrito.js';

const notebook=new Producto('imagen','notebook','123456','125Gb','200000',8,10);
//console.table(notebook)
const carrito= new Carrito('productos');
//console.table(carrito)

let URLProductos = 'https://slifer.bsite.net/td-producto';
let URLProductosAdd = 'https://slifer.bsite.net/td-producto';
let datos;
/*
async function sucursal(){

    let respuesta = await fetch(URLSucursal);
    datos = await respuesta.json();
    console.log(datos);

}

async function categoria(){

    let respuesta = await fetch(URLCategoria);
    datos = await respuesta.json();
    console.table(datos);

}*/

/*
async function producto(){

    let respuesta = await fetch(URLProductos);
    datos = await respuesta.json();
    console.table(datos);

}*/

//Mostrar Productos
async function producto(){
    try{
        const respuesta = await fetch(URLProductos);
        datos = await respuesta.json();
        console.table(datos);

    }catch(error) {

        console.log('error'+error);
    }      
}


//Agregar Productos
/*async function agregarProducto(){

    try{
    const respuesta = await fetch(URLProductos, { 
    method: 'POST',
    credentials: 'same-origin', 
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify({
        "id": Producto.id,
        "nombre": "prueba",
        "precio": 0,
        "link": "/prueba",
        "stock": 4,
        "etiqueta": "prueba",
        "descripcion": "prueba",
        "idCategoria": 6,
        "idSucursal": 6
      })  
}); 

    datos = await respuesta.json()
    console.log(datos);

    }catch(error){
        console.log('Error: '+error);
    }
}*/

//Borrar producto

let id = '1007';

async function borrarProducto(id){
    try{                     
        const respuesta = await fetch(`${URLProductosAdd}/${id}`, { 
        method: 'DELETE'}); 
    
        datos = await respuesta.json()
        console.log(datos);
    
    }catch(error){
            console.log(`Error: ${error}`);
    }
}


//Modificar productos
async function modificarProducto(){

    try{
        const respuesta = await fetch(URLProductos,{ 
            method: 'PUT',
            credentials: 'same-origin', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({
                "id": 1009,
                "nombre": "Almohada de plumas de ganso",
                "precio": 20000,
                "link": "/img/asdad",
                "stock": 4,
                "etiqueta": "Almohada",
                "descripcion": "Almohada suavecita de plumas de ganso blancas",
                "idCategoria": 40,
                "idSucursal": 6
              })  
        }); 
    }catch(error){
        console.log(`Error: ${error}`);
    }

}

//sucursal();
//categoria();

producto();
borrarProducto(id);
modificarProducto()
//agregarProducto();