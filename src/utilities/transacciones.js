const getCambioSaldo = (transacciones) => {
  let cambioSaldo = 0;

  for (const transaccion of transacciones) {
    if (transaccion.tipo === "Recieved") {
      cambioSaldo += transaccion.cantidad;
    } else {
      cambioSaldo -= transaccion.cantidad;
    }

    return cambioSaldo;
  }
};

module.exports = { getCambioSaldo };
