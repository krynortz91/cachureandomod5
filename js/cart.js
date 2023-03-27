import {Producto} from '/js/Producto.js';
import {Carrito} from '/js/Carrito.js';

const notebook=new Producto('imagen','notebook','123456','125Gb','200000',8,10);
console.table(notebook)
const carrito= new Carrito('productos');
console.table(carrito)


