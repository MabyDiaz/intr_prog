/* desarrolle el código que solicite al usuario ingresar dos números y luego realice las siguientes operaciones aritméticas: suma, resta, multiplicación y división. Muestra los resultados en la consola de manera clara.*/

function verificarNumero(mensaje) {
  let numero = 0;
  do {
    numero = parseFloat(prompt(mensaje));
    if (isNaN(numero)) {
      console.log("Número inválido. Ingrese un número válido");
    }
  } while (isNaN(numero));
  return numero;
}

function calcularOperaciones() {
  let numero1 = verificarNumero("Ingrese el primer número");
  let numero2 = verificarNumero("Ingrese el segundo numero");

  let operacion = parseInt(
    prompt(
      "Selecciona la operación a calcular (elige un número): \n1 - SUMA \n2 - RESTA \n3 - MULTIPLICACION \n4 - DIVISION"
    )
  );

  let resultado;

  switch (operacion) {
    case 1:
      resultado = numero1 + numero2;
      console.log(
        `El resultado de sumar ${numero1} y ${numero2} es: ${resultado}.`
      );
      break;
    case 2:
      resultado = numero1 - numero2;
      console.log(
        `El resultado de restar ${numero1} y ${numero2} es: ${resultado}.`
      );
      break;
    case 3:
      resultado = numero1 * numero2;
      console.log(
        `El resultado de multiplicar ${numero1} y ${numero2} es: ${resultado}.`
      );
      break;
    case 4:
      do {
        numero2 = verificarNumero(
          "Ingrese el segundo número (no puede ser cero para la división)"
        );
        if (numero2 === 0) {
          console.log(
            "No se puede dividir por cero. Por favor, ingrese un número diferente de cero."
          );
        }
      } while (numero2 === 0);

      resultado = numero1 / numero2;
      console.log(
        `El resultado de dividir ${numero1} y ${numero2} es: ${resultado}.`
      );
      break;

    default:
      console.log("Operación no válida.");
  }
}

calcularOperaciones();
