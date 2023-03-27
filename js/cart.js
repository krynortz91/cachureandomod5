import {Producto} from '/js/Producto.js';
import {Carrito} from '/js/Carrito.js';

const notebook=new Producto('imagen','notebook','123456','125Gb','200000',8,10);
console.table(notebook)
const carrito= new Carrito('productos');
console.table(carrito)
let URLSucursal = 'https://slifer.bsite.net/td-sucursal';
let URLCategoria = 'https://slifer.bsite.net/td-categoria';
let URLProductos = 'https://slifer.bsite.net/td-producto';
let datos;


async function sucursal(){

    let respuesta = await fetch(URLSucursal);
    datos = await respuesta.json();
    console.log(datos);

}
async function categoria(){

    let respuesta = await fetch(URLCategoria);
    datos = await respuesta.json();
    console.table(datos);

}

async function producto(){

    let respuesta = await fetch(URLProductos);
    datos = await respuesta.json();
    console.table(datos);

}
sucursal();
categoria();
producto();