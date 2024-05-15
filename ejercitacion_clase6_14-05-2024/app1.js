/* Ejercicio 1: Crear un objeto que represente una persona con nombre, edad y ciudad, y luego modificarlo. */

let persona = {
  nombre: 'Sofía',
  edad: 25,
  ciudad: 'Córdoba',
};
console.log(persona);

persona.nombre = 'Lorena';
persona.edad = 35;
persona.ciudad = 'Buenos Aires';

console.log(persona);

/*Destructuring*/
const {nombre, edad, ciudad} = persona;

console.log(nombre);
console.log(edad);
console.log(ciudad);
