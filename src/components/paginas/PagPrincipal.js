import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { BotonesTransferencias } from "../BotonesTransferencias";
import { Grafica } from "../Grafica";
import { Movimientos } from "../Movimientos";

export const PagPrincipal = () => {
  const [saldo, setSaldo] = useState(0);
  const [movimientos, setMovimientos] = useState([]);
  const [movimientosSeleccionados, setMovimientosSeleccionados] =
    useState("Week");

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

  const getMovimientos = async () => {
    const token = localStorage.getItem("token");
    const { usuario } = jwtDecode(token);

    const resp = await fetch(
      `http://localhost:4000/transaccion/semana/${usuario._id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setMovimientos(await resp.json());
  };

  useEffect(() => getMovimientos(), []);
  return (
    <>
      <Grafica
        saldo={saldo}
        movimientosSeleccionados={movimientosSeleccionados}
        setMovimientosSeleccionados={setMovimientosSeleccionados}
        movimientos={movimientos}
      />
      <BotonesTransferencias />
      <Movimientos movimientos={movimientos} />
    </>
  );
};
