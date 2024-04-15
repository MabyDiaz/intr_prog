/*Desarrolle el código que solicite al usuario ingresar un número, luego incrementa el número en 3 y muestra el resultado en la consola. */

let numero = parseInt(prompt("Ingrese un número"));

function incrementarNumero(numero) {
  return numero + 3;
}

let resultado = incrementarNumero(numero);
console.log(`El resultado de incrementar ${numero} en tres es: ${resultado}.`);
