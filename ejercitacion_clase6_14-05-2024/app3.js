/* Ejercicio 3: Trabajar con un array de productos
Crea un array vacío llamado productos.
Agrega 3 productos al array, cada uno con las propiedades nombre, precio y stock.
Muestra el primer y último producto del array en la consola.
 Utiliza el método para agregar un nuevo producto al final del array.
 Utiliza el método para agregar un nuevo producto al inicio del array.
 Elimina el primer producto del array utilizando el método indicado.
 Elimina el último producto del array utilizando el método indicado.
Muestra el array completo en la consola después de todas las modificaciones. */

/* Crea un array vacío llamado productos. */
let productos = [];

/* Agrega 3 productos al array, cada uno con las propiedades nombre, precio y stock. */
productos.push(
  { nombre: 'Laptop', precio: 1000, stock: 10 },
  { nombre: 'Mouse', precio: 20, stock: 50 },
  { nombre: 'Teclado', precio: 30, stock: 30 }
);

console.log(productos);

/* Muestra el primer y último producto del array en la consola. */
console.log(productos[0]); // Primer producto
console.log(productos[productos.length - 1]); // Último producto

/* Utiliza el método para agregar un nuevo producto al final del array. */
productos.push({ nombre: 'Auriculares', precio: 200, stock: 10 });
console.log(productos);

/* Utiliza el método para agregar un nuevo producto al inicio del array. */
productos.unshift({ nombre: 'Cargador', precio: 25, stock: 15 });
console.log(productos);

/* Elimina el primer producto del array utilizando el método indicado. */
productos.shift();
console.log(productos);

/* Elimina el último producto del array utilizando el método indicado. */
productos.pop();

/* Muestra el array completo en la consola después de todas las modificaciones */
console.log(productos);
