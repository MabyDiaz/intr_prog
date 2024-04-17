// Entrada
//Definir variables
let nombreUsuario = "Maby";
let montoRetirar = parseFloat(prompt("Ingrese el monto a retirar"));
let saldoCuenta = 20000;

// Proceso
if (isNaN(montoRetirar) || montoRetirar <= 0) {
  alert("Monto inválido. Ingresa un monto válido");
} else {
  if (montoRetirar <= saldoCuenta) {
    saldoCuenta -= montoRetirar;

    // Salida
    alert(
      `Felicitaciones!! ${nombreUsuario}. Retiro Exitoso!!!. Tu nuevo saldo es: $${saldoCuenta}`
    );
  } else {
    // Salida
    alert(
      `Lo siento ${nombreUsuario}, no tienes saldo suficiente para realizar el retiro. Tu saldo disponible es: $${saldoCuenta}.`
    );
  }
}
