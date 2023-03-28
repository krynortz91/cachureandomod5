import {Producto} from '/js/Producto.js';
import {Carrito} from '/js/Carrito.js';

const notebook=new Producto('imagen','notebook','123456','125Gb','200000',8,10);
//console.table(notebook)
const carrito= new Carrito('productos');
//console.table(carrito)

let URLProductos = 'https://slifer.bsite.net/td-producto';
let datos;


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
/*
async function agregarProducto(){
    try{
        const respuesta = await fetch(URLProductos, { 
        method: 'POST',
        credentials: 'same-origin', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({
            "id": Producto.id,
            "nombre": "Lamparas de Pikachu",
            "precio": 40000,
            "link": "/img/pikachu.png",
            "stock": 10,
            "etiqueta": "pikachu",
            "descripcion": "Lamparas de Pikachus kawai",
            "idCategoria": 29,
            "idSucursal": 6
        })  
}); 


    datos = await respuesta.json()
    console.log(datos);

 }catch(error){
        console.log('Error: '+error);
 }
}
*/
//Borrar producto
let id = '1044';


async function borrarProducto(id){
    try{                     
        const respuesta = await fetch(`${URLProductos}/${id}`, { 
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
                "id": 1026,
                "nombre": "Lamparas de Pikachu rojas",
                "precio": 4000,
                "link": "/img/pikachu.png",
                "stock": 20,
                "etiqueta": "pikachu",
                "descripcion": "Lamparas de Pikachus kawai pirateadas",
                "idCategoria": 29,
                "idSucursal": 6
              })  
        }); 
    }catch(error){
        console.log(`Error: ${error}`);
    }
}

producto();
borrarProducto(id);
//modificarProducto()
//agregarProducto();