/* opcion = prompt(`\n**Cajero Automático**\n\n1. Consultar sal
 
 do\n2. Depositar dinero\n3. Retirar dinero\n4. Salir\n\nElija una opción:`); */

let nombreUsuario = prompt("Ingrese su nombre");
let saldoCuenta = 20000;
let montoRetiro;
let montoDeposito;

function solicitarMontoRetiro() {
  return parseFloat(prompt("Ingrese el monto a retirar"));
}

function solicitarMontoDeposito() {
  return parseFloat(prompt("Ingrese el monto que desea depositar"));
}

function mostrarMensaje(mensaje) {
  alert(mensaje);
}

function verificarMonto(monto) {
  do {
    if (monto === undefined) {
      mostrarMensaje("Monto inválido. No se ha proporcionado un monto.");
      return false;
    } else if (isNaN(monto)) {
      mostrarMensaje(
        "Monto inválido. El valor ingresado no es un número válido."
      );
      return false;
    } else if (monto <= 0) {
      mostrarMensaje("Monto inválido. Por favor, ingrese un número positivo.");
      return false;
    } else if (monto > saldoCuenta) {
      mostrarMensaje(
        `${nombreUsuario}, tus fondos son insuficientes. Tu saldo disponible es: $${saldoCuenta} `
      );
      return false;
    } else {
      return true;
    }
  } while (monto === undefined || isNaN(monto) || monto <= 0);
}

function retirarDinero() {
  montoRetiro = solicitarMontoRetiro();
  if (verificarMonto(montoRetiro)) {
    saldoCuenta -= montoRetiro;
    mostrarMensaje(
      `${nombreUsuario}, tu retiro fue exitoso!! \nRetiraste: $${montoRetiro} \nTu nuevo saldo es: $${saldoCuenta}`
    );
  }
}

function depositarDinero() {
  montoDeposito = solicitarMontoDeposito();
  if (verificarMonto(montoDeposito)) {
    saldoCuenta += montoDeposito;
    return mostrarMensaje(
      `${nombreUsuario}, depositaste $${montoDeposito}. \nTu saldo actual es: $${saldoCuenta}`
    );
  }
}

function mostrarSaldo() {
  mostrarMensaje(`${nombreUsuario}, tu saldo disponible es: $${saldoCuenta}.`);
}

function utilizarCajero() {
  let opcion = 0;
  do {
    opcion = parseInt(
      prompt(
        "***** CAJERO AUTOMATICO *****\n\n1. Consultar Saldo\n2. Depositar Dinero\n3. Retirar Dinero\n4. Salir\n\nElija una opción"
      )
    );

    switch (opcion) {
      case 1:
        mostrarSaldo();
        break; 
         
        
      case 2:
        depositarDinero();
        break;
      case 3:
        retirarDinero();
        break;
      case 4:
        mostrarMensaje(
          `${nombreUsuario}, gracias por usar el Cajero Automático!!`
        );
        break;
      default:
        mostrarMensaje(`${nombreUsuario}, ingresaste un número inválido.`);
        break;
    }
  } while (opcion != 4);
}
utilizarCajero();
