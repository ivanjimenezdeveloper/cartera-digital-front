import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { BotonesTransferencias } from "../BotonesTransferencias";
import { Grafica } from "../Grafica";
import { Movimientos } from "../Movimientos";

export const PagPrincipal = () => {
  const [saldo, setSaldo] = useState(0);
  const getSaldo = async () => {
    const token = localStorage.getItem("token");
    const { usuario } = jwtDecode(token);

    const resp = await fetch(
      `http://localhost:4000/balance/saldo/${usuario._id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setSaldo(await resp.json());
  };

  useEffect(() => {
    getSaldo();
  });
  return (
    <>
      <Grafica saldo={saldo} />
      <BotonesTransferencias />
      <Movimientos />
    </>
  );
};
