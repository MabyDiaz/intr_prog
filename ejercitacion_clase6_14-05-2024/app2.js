/* Ejercicio 2: Crear y modificar un objeto persona.
Crea un objeto vacío llamado persona.
 Agrega las siguientes propiedades al objeto: nombre, edad, ciudad y ocupación.
 Asigna valores a cada propiedad.
Muestra el valor de cada propiedad en la consola.
Modifica el valor de la propiedad ciudad.
Agrega una nueva propiedad llamada hobbies al objeto. Asigna un array de hobbies a la propiedad.
Muestra el objeto completo en la consola. */

/* Crea un objeto vacío llamado persona. */
let persona = {};

/* Agrega las siguientes propiedades al objeto: nombre, edad, ciudad y ocupación.
   Asigna valores a cada propiedad. */
persona.nombre = 'Ana';
persona.edad = 28;
persona.ciudad = 'Buenos Aires';
persona.ocupacion = 'Ingeniera';

console.log(persona);

/* Modifica el valor de la propiedad ciudad.*/
persona.ciudad = 'Córdoba';

/* Agrega una nueva propiedad llamada hobbies al objeto. Asigna un array de hobbies a la propiedad. */
persona.hobbies = ['leer', 'viajar', 'correr'];

/* Muestra el objeto completo en la consola. */
console.log(persona);

/* Destructuring */
const { nombre, edad, ciudad, ocupacion } = persona;

console.log(nombre);
console.log(edad);
console.log(ciudad);
console.log(ocupacion);
