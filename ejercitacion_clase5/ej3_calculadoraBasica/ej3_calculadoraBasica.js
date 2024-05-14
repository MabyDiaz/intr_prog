/* Ejercicio 3: Calculadora básica.
Crea una función que capture interacción con teclado, para solicitar al usuario dos números y un operador matemático (+, -, *, /). La función debe validar que los números ingresados sean válidos (números) y el operador sea uno de los permitidos. Luego, debe realizar la operación matemática correspondiente y mostrar el resultado utilizando la función adecuada. */

function calcularOperaciones() {
  let opcionValida = false;
  let resultado;

  let numero1 = parseFloat(prompt('Ingrese el primer número: '));
  while (isNaN(numero1) || numero1 === null) {
    numero1 = parseFloat(
      prompt(
        'Error. No es un número válido. Ingrese un número válido para el primer número:'
      )
    );
  }

  let numero2 = parseFloat(prompt('Ingrese el segundo número: '));
  while (isNaN(numero2) || numero2 === null) {
    numero2 = parseFloat(
      prompt(
        'Error. No es un número válido. Ingrese un número válido para el segundo número:'
      )
    );
  }

  do {
    let opcion = prompt(
      'Elija uno de los siguientes operadores matemáticos de la operación que desea realizar:\n+ Para realizar una suma\n- Para realizar una resta\n* Para realizar una multiplicación\n/ Para realizar una división'
    );

    while (!opcionValida) {
      switch (opcion) {
        case '+':
        case '-':
        case '*':
        case '/':
          opcionValida = true;
          break;
        default:
          opcion = prompt(
            'Operador no válido. Ingrese uno de los operadores permitidos (+, -, *, /):'
          );
      }
    }

    switch (opcion) {
      case '+':
        resultado = numero1 + numero2;
        break;
      case '-':
        resultado = numero1 - numero2;
        break;
      case '*':
        resultado = numero1 * numero2;
        break;
      case '/':
        if (numero2 === 0) {
          alert('Error: No se puede dividir por cero.');
        } else {
          resultado = numero1 / numero2;
        }
        break;
    }

    alert(`El resultado de ${numero1} ${opcion} ${numero2} es: ${resultado}`);

    let respuesta = prompt(
      'Desea realizar otra operación? (S/N)'
    ).toUpperCase();

    if (respuesta === 'S') {
      opcionValida = false;
    } else {
      opcionValida = true;
      alert('Gracias por usar nuestra Calculadora Básica.');
    }
  } while (!opcionValida);
}

calcularOperaciones();
