let nombreUsuario = prompt("Ingrese su nombre");
let saldoCuenta = 20000;
let montoRetirar = solicitarMontoRetiro();

function solicitarMontoRetiro() {
  return parseFloat(prompt("Ingrese el monto a retirar"));
}

function mostrarMensaje(mensaje) {
  alert(mensaje);
}

function verificarMontoRetiro(monto) {
  if (isNaN(monto) || monto <= 0) {
    mostrarMensaje("Monto inválido. Ingrese un monto válido.");
    return false;
  } else {
    return true;
  }
}

function calcularSaldoCuenta(monto) {
  saldoCuenta -= monto;
  return saldoCuenta;
}

function realizarRetiro(monto) {
  if (verificarMontoRetiro(monto)) {
    if (monto <= saldoCuenta) {
      saldoCuenta = calcularSaldoCuenta(monto);
      mostrarMensaje(
        `${nombreUsuario}, tu retiro fue exitoso!!. Tu nuevo saldo es: $${saldoCuenta}`
      );
    } else {
      mostrarMensaje(
        `${nombreUsuario}, tus fondos son insuficientes. Tu saldo disponible es: $${saldoCuenta} `
      );
    }
  }
}

realizarRetiro(montoRetirar);
