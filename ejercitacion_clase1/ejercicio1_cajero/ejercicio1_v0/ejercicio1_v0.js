// Entrada
let nombreUsuario = "Maby";
let montoRetirar = 50;
let saldoCuenta = 20000;

// Proceso
if (montoRetirar <= saldoCuenta) {
  saldoCuenta -= montoRetirar;

  // Salida
  console.log(`Felicitaciones!! ${nombreUsuario}. Retiro Exitoso!!!`);
  console.log("El saldo final es: " + saldoCuenta);
} else {
  // Salida
  console.log(
    `Lo siento ${nombreUsuario}, no tienes saldo suficiente para realizar el retiro`
  );
}
