/* Desarrolle al código que verifique si un número ingresado por el usuario es positivo y par. Muestra el resultado en la consola. */

function verificarNumero() {
  let numero;
  do {
    numero = parseFloat(prompt("Ingrese un número"));
    if (isNaN(numero)) {
      console.log(`El número ${numero} no es válido.`);
    } else if (numero <= 0) {
      console.log(`El número ${numero} no es positivo.`);
    } else if (numero % 2 !== 0) {
      console.log(`El número ${numero} no es par.`);
    }
  } while (isNaN(numero) || numero < 0 || numero % 2 !== 0);

  console.log(`El número ${numero} es positivo y par.`);
  return numero;
}

verificarNumero();
