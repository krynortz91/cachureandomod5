export class Mantenedor {

//Método Mostrar Productos
async producto(){
    try{
        const respuesta = await fetch(URLProductos);
        datos = await respuesta.json();
        console.table(datos);

    }catch(error) {

        console.log('error'+error);
    }      
}

//Método Agregar Productos
async agregarProducto(){
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

//Método Borrar producto
async borrarProducto(id){
    try{                     
        const respuesta = await fetch(`${URLProductos}/${id}`, { 
        method: 'DELETE'}); 
    
        datos = await respuesta.json()
        console.log(datos);
    
    }catch(error){
            console.log(`Error: ${error}`);
    }
}

//Método Modificar productos
async modificarProducto(){
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

}

export default Mantenedor;