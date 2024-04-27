/* Crea un desarrollo en JavaScript que simule un carrito de compras utilizando un array. Debes implementar las siguientes funcionalidades:
a. Agregar productos al carrito:
Crea tres objetos que representen productos con propiedades como nombre y precio y stock.
b. Agregar un cuarto producto al principio del carrito:
Crea un nuevo objeto que represente un producto.
c. Eliminar el primer producto del carrito.
d. Eliminar el último producto del carrito. */

const carrito = [];

/* Crea tres objetos que representen productos con propiedades como nombre y precio y stock. */
const producto = {
  nombre: 'Monitor 20 Pulgadas',
  precio: 500,
  stock: 5,
};

const producto2 = {
  nombre: 'Celular',
  precio: 500,
  stock: 8,
};

const producto3 = {
  nombre: 'Teclado',
  precio: 50,
  stock: 10,
};

/* a. Agregar productos al carrito: */
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);

console.log(carrito);

/* Crea un nuevo objeto que represente un producto. */
const producto4 = {
  nombre: 'Mouse',
  precio: 30,
  stock: 10,
};

/* b. Agregar un cuarto producto al principio del carrito: */
carrito.unshift(producto4);
console.log(carrito);

/* c. Eliminar el primer producto del carrito. */
carrito.shift();
console.log(carrito);

/* d. Eliminar el último producto del carrito. */
carrito.pop();
console.log(carrito);
