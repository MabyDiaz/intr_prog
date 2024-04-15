/* Desarrolle el código que solicite al usuario ingresar dos números y luego muestre en la consola si el primer número es mayor, menor o igual al segundo número.*/

function compararDosNumeros() {
  let numero1 = parseFloat(prompt("Ingrese el primer número"));
  let numero2 = parseFloat(prompt("Ingrese el segundo número"));

  if (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que el número ${numero2}.`);
  } else if (numero1 < numero2) {
    console.log(`El número ${numero1} es menor que el número ${numero2}.`);
  } else {
    console.log(`El número ${numero1} es igual que el número ${numero2}.`);
  }
}

compararDosNumeros();
