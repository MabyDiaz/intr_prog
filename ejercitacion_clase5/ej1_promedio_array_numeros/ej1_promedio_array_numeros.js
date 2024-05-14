/* Ejercicio 1: Calcular el promedio de un array de números
Crea una función que tome como argumento un array de números y devuelva el promedio de todos los elementos del array. La función debe validar que el array no esté vacío y, en caso de estarlo, mostrar un mensaje de error. */

const numeros = [];

// Obtener una longitud aleatoria
let longitudNumeros = generarNumeroAleatorio(1, 10);

// Llenar el array con números aleatorios
for (let i = 0; i < longitudNumeros; i++) {
    numeros.push(generarNumeroAleatorio(1, 100));
}

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1) + min);
}

function calcularPromedioNumeros(numeros) {
    let suma = 0;
    let promedio = 0;
    if (numeros.length !== 0) {

        for (let i = 0; i < numeros.length; i++) {
            suma += numeros[i];
        }

        promedio = (suma / numeros.length).toFixed(2);

    } else {
        console.log("Lo siento!. No hay elementos para mostrar.");
    }



    return promedio;
}

let promedio = calcularPromedioNumeros(numeros);
console.log(`El promedio de: [${numeros}], es ${promedio} .-`);