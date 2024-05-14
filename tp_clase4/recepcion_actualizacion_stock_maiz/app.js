/* Caso de estudio:
Proceso de Recepción y Actualización del Stock de Maíz
Introducción:
La Cooperativa La Perdedora está a punto de iniciar la cosecha de maíz. El recibidor de granos tiene la responsabilidad de recibir un ingreso inicial de 3000 toneladas de maíz y actualizar el stock en el silo correspondiente. Para garantizar un proceso eficiente y seguro, es necesario seguir una serie de pasos específicos.
Objetivos:
 Verificar el stock actual de maíz en el silo designado.
 Recibir 3000 toneladas de maíz del camión transportador.
 Actualizar el stock de maíz en el sistema de gestión de inventarios.
 Informar al personal de la cooperativa sobre el stock actualizado de maíz.
Procedimiento:
1. Verificación del stock actual:
 Consultar el stock actual del silo correspondiente a cereal maíz.
2. Recepción del maíz:
 Asegurarse de que el maíz descargado cumpla con los estándares de calidad establecidos por la cooperativa:
 Verificar el estado del maíz y dirigirlo al silo correspondiente:
 Si tiene cuerpos extraños, debe ir a un silo dos (2) reservado para este fin.
 Si tiene humedad, debe ir a silo tres (3) reservado para tal fin.
3. Actualización del stock:
 Sumar la cantidad de maíz descargado al stock actual. */


let silosDeMaiz = [

    siloMaizBueno = {
        nombre: "Silo de Maíz Bueno",
        stockActual: 1000,
        capacidadMaxima: 5000,
    },


    siloMaizCuerposExtraños = {
        nombre: "Silo de Maíz Cuerpos Extraños",
        stockActual: 250,
        capacidadMaxima: 5000,

    },

    siloMaizHumedo = {
        nombre: "Silo de Maíz Húmedo",
        stockActual: 500,
        capacidadMaxima: 5000,

    }

]

/* 1. Verificación del stock actual:
 Consultar el stock actual del silo correspondiente a cereal maíz. */
function consultarStockActual() {
    for (let i = 0; i < silosDeMaiz.length; i++) {
        const silo = silosDeMaiz[i];
        const nombreSilo = silo.nombre ? silo.nombre : "Silo de Maíz " + (i + 1);
        mostrarMensaje(`El silo ${nombreSilo} tiene ${silo.stockActual} toneladas.`);
    }
}

/* 2. Recepción del maíz:
 Asegurarse de que el maíz descargado cumpla con los estándares de calidad establecidos por la cooperativa:
 Verificar el estado del maíz y dirigirlo al silo correspondiente:
 Si tiene cuerpos extraños, debe ir a un silo dos (2) reservado para este fin.
 Si tiene humedad, debe ir a silo tres (3) reservado para tal fin. */

function verificarCalidadMaiz() {

    let destinoMaiz;
    let ingresoMaiz = parseFloat(prompt("¿Cuál es el estado del maiz?. Elija una opción utilizando números.\n 1.Maiz en Excelente Estado \n 2.Maiz con Objetos Extraños \n Maiz Húmedo \n "))

    switch (ingresoMaiz) {
        case 1:
            mostrarMensaje("El Maíz está en excellente estado y será derivado al siloMaizBueno");
            destinoMaiz = siloMaizBueno;
            break;
        case 2:
            mostrarMensaje("El Maíz tiene objetos extraños y será derivado al siloMaizCuerposExtraños");
            destinoMaiz = siloMaizCuerposExtraños;
            break;
        case 3:
            mostrarMensaje("El Maíz está Húmedo y será derivado al siloMaizHumedo");
            destinoMaiz = siloMaizHumedo;
            break;

        default:
            mostrarMensaje("Opción Invalidad. Ingrese una opción válida (1, 2 o 3)");
            destinoMaiz = null;
            break;
    }

    return destinoMaiz;
}



/* Actualización del stock:
 Sumar la cantidad de maíz descargado al stock actual.
 Informar el estado actual del silo a los usuarios.
 Comunicar el nuevo stock de maíz al personal de la cooperativa, incluyendo gerentes, supervisores y operadores del silo. */
let maizDescargado = 3000;

function agregarMaiz() {

    let destinoMaiz = verificarCalidadMaiz();

    if (destinoMaiz !== null) {
        let capacidadDisponible = destinoMaiz.capacidadMaxima - destinoMaiz.stockActual;

        let limpieza = prompt("¿Está limpio el silo? (Si/No)").toUpperCase();
        let ventilacion = prompt("¿Tiene buena ventilación el silo? (Si/No").toUpperCase();

        if (maizDescargado <= capacidadDisponible) {

            if (limpieza === "SI" && ventilacion === "SI") {

                destinoMaiz.stockActual += maizDescargado;

                mostrarMensaje(`Se han recibido ${maizDescargado} toneladas de maiz, que serán almacenadas en el silo ${destinoMaiz.nombre}.\n El stock actual de maiz en ${destinoMaiz.nombre} es de ${destinoMaiz.stockActual} toneladas.\n El silo ${destinoMaiz.nombre} se encuentra en óptimas condiciones de almacenamiento.`)
            } else {
                mostrarMensaje("No se cumplen las condiciones óptimas de almacenamiento.")

            }
        } else {
            mostrarMensaje(`No hay suficiente espacio en el silo ${destinoMaiz.nombre} para agregar ${maizDescargado}toneladas de maíz. Ingrese una cantidad válida.`)
        }


    } else {
        mostrarMensaje("Ingresó una opción inválida. Se ha comunicado el problema al personal superior.")
    }
}

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function menuMaiz() {
    let opcion;

    do {
        opcion = parseInt(prompt("*** Bienvenido al proceso de Recepción y Actualización de Maíz de la Cooperadora La Perdedora ***\n Elija una de las siguientes opciones para continuar\n 1. Consultar Stock de Maíz\n 2.  Agregar maíz al stock actual \n 3. Informar al personal superior el stock actual\n 4. Salir del sistema"));

        switch (opcion) {
            case 1:
                consultarStockActual();
                break;
            case 2:
                agregarMaiz();
                break;
            case 3:
                mostrarMensaje(`Se comunica al personal superior que los silos se encuentrar en las siguietes condiciones: \n El silo de Maíz Bueno tiene ${silosDeMaiz[0].stockActual} toneladas de maíz.\nEl silo de Maíz Cuerpos Extrañoso tiene ${silosDeMaiz[1].stockActual} toneladas de maíz.\nEl silo de Maíz Húmedo tiene ${silosDeMaiz[2].stockActual} toneladas de maíz. `);
                break;
            case 4:
                mostrarMensaje("Gracias por utilizar el sistema de Recepción y Actualización de Stock!!!")
                break;

            default:
                mostrarMensaje("Ha ingresado una opción incorrecta. Por favor ingrese un número del 1 al 4.")
                break;
        }
    } while (opcion != 4)
}

menuMaiz();