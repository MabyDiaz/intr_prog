/* Ejercicio 2: Precio final, teniendo en cuenta el costo y el IVA.
Imagina que tienes una tienda y necesitas calcular el precio final de venta de tus productos, incluyendo el precio de costo y el Impuesto al Valor Agregado (IVA). Para ello, necesitas crear una función que reciba como parámetros el precio de costo del producto y el porcentaje de IVA, y que retorne el precio final redondeado a dos decimales. */

function calcularPrecioFinal(precioCosto, iva) {
  let precioFinal = parseFloat(precioCosto + precioCosto * (iva / 100)).toFixed(
    2
  );

  return precioFinal;
}

let precioFinal = calcularPrecioFinal(250, 21);
console.log(`El precio final es $${precioFinal}`);
