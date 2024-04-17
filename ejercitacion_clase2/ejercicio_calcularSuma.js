/* Calcular la suma de los números del 1 al 5 */

function calcularSuma() {
  let suma = 0;
  for (let i = 1; i <= 5; i++) {
    suma += i;
  }

  return suma;
}

console.log(calcularSuma());
