/* imprimir el nombre de un mes según su número. Por ejemplo, si el número es 1, imprimir "Enero"; si es 2, imprimir "Febrero", y así sucesivamente hasta diciembre. */

function mostrarMes() {
  let mes = parseInt(prompt("Ingrese un mes (en número: entre 1 y 12)"));
  let nombreMes = " ";

  switch (mes) {
    case 1:
      nombreMes = "Enero";
      break;

    case 2:
      nombreMes = "Febrero";
      break;

    case 3:
      nombreMes = "Marzo";
      break;

    case 4:
      nombreMes = "Abril";
      break;
    case 5:
      nombreMes = "Mayo";
      break;
    case 6:
      nombreMes = "Junio";
      break;
    case 7:
      nombreMes = "Julio";
      break;
    case 8:
      nombreMes = "Agosto";
      break;
    case 9:
      nombreMes = "Setiembre";
      break;
    case 10:
      nombreMes = "Octubre";
      break;
    case 11:
      nombreMes = "Noviembre";
      break;
    case 12:
      nombreMes = "Diciembre";
      break;

    default:
      console.log("Ingresó un mes inválido.");
      break;
  }

  alert(`El nombre del mes que ingresaste es: ${nombreMes}`);
}

mostrarMes();
