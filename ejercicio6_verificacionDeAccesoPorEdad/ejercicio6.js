/* Desarrolle el código que solicite al usuario ingresar su edad y el número máximo permitido para un servicio. Luego, determina si el usuario puede acceder al servicio verificando si su edad es igual o mayor al número máximo permitido. */

function verificarAccesoPorEdad() {
  let edad;
  let numeroMaximoPermitido;

  do {
    edad = prompt("Ingrese su edad");
    edad = parseInt(edad);
    if (isNaN(edad) || edad <= 0) {
      console.log("Por favor, ingrese una edad válida y mayor que cero.");
    }
  } while (isNaN(edad) || edad <= 0);

  do {
    numeroMaximoPermitido = prompt("Ingrese el número máximo permitido");
    numeroMaximoPermitido = parseInt(numeroMaximoPermitido);
    if (isNaN(numeroMaximoPermitido) || numeroMaximoPermitido <= 0) {
      console.log(
        "Por favor, ingrese un número máximo permitido válido y mayor que cero."
      );
    }
  } while (isNaN(numeroMaximoPermitido) || numeroMaximoPermitido <= 0);

  if (edad >= numeroMaximoPermitido) {
    console.log("Puede acceder al servicio.");
  } else {
    console.log(
      "Lo siento, su edad está fuera del rango permitido. No puede acceder al servicio."
    );
  }
}

verificarAccesoPorEdad();
