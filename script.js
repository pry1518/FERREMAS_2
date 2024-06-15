let carroDeCompras = [];

function agregarAlCarro(idProducto) {
    // Simplemente agregamos el ID del producto al carro de compras
    carroDeCompras.push(idProducto);

    // Actualizamos la visualización del carro
    actualizarCarro();
}

function actualizarCarro() {
    let carroHTML = "";
    let total = 0;

    // Recorremos los productos en el carro y los mostramos en el HTML
    for (let idProducto of carroDeCompras) {
        let producto = obtenerProductoPorID(idProducto);
        total += producto.precio;
        carroHTML += `<div class="col-md-4">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <h4>${producto.nombre}</h4>
                        <p>Precio: $${producto.precio} CLP</p>
                     </div>`;
    }

    // Actualizamos la visualización del carro y el total
    document.getElementById("carro").innerHTML = carroHTML;
    document.getElementById("total").innerHTML = `<h3>Total: $${total} CLP</h3>`;
}

function obtenerProductoPorID(idProducto) {
    // Aquí deberías implementar la lógica para obtener el producto por su ID
    // Esto puede involucrar una consulta a una base de datos, por ejemplo
    // Por ahora, retornamos un producto ficticio
    return {
        id: idProducto,
        nombre: "Producto " + idProducto,
        imagen: "producto" + idProducto + ".jpg",
        precio: 1000 // Precio ficticio
    };
}

function realizarCompra() {
    // Aquí puedes implementar la lógica para realizar la compra
    // Por ejemplo, enviar los IDs de los productos al servidor
    // Y luego limpiar el carro de compras
    carroDeCompras = [];
    actualizarCarro();
}
