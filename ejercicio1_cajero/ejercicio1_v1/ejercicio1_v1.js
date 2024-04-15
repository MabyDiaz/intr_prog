// Entrada
let nombreUsuario = prompt("Ingresa tu nombre");
let montoRetirar = parseFloat(prompt("Ingrese el monto a retirar"));
let saldoCuenta = 20000;

// Proceso
if (montoRetirar <= saldoCuenta) {
  saldoCuenta -= montoRetirar;

  // Salida
  alert(
    `Felicitaciones!! ${nombreUsuario}. Retiro Exitoso!!!. Tu nuevo saldo es: $${saldoCuenta}.`
  );
} else {
  // Salida
  alert(
    `Lo siento ${nombreUsuario}, no tienes saldo suficiente para realizar el retiro. Tu sal disponible es: $${saldoCuenta}.`
  );
}
