/* Escribe un programa que solicite al usuario ingresar dos números y luego muestre en la consola si el primer número es mayor, menor o igual al segundo número. */
// Este lo hice con validación para que tenga algo diferente del ejercicio 5

function compararDosNumeros() {
  let numero1 = parseFloat(prompt("Ingrese el primer número"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número"));

  do {
    numero1 = parseFloat(prompt("Ingrese el primer número"));
    if (isNaN(numero1)) {
      console.log("Por favor, ingrese un primer número válido.");
    }
  } while (isNaN(numero1));

  do {
    numero2 = parseFloat(prompt("Ingrese el segundo número"));
    if (isNaN(numero2)) {
      console.log("Por favor, ingrese un segundo número válido.");
    }
  } while (isNaN(numero2));

  if (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que el número ${numero2}.`);
  } else if (numero1 < numero2) {
    console.log(`El número ${numero1} es menor que el número ${numero2}.`);
  } else {
    console.log(`El número ${numero1} es igual que el número ${numero2}.`);
  }
}

compararDosNumeros();
