import jwtDecode from "jwt-decode";
import { useCallback, useEffect } from "react";
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

  const getMovimientos = useCallback(async () => {
    const token = localStorage.getItem("token");
    const { usuario } = jwtDecode(token);
    const apiLlamada = (movimientosSeleccionados) => {
      if (movimientosSeleccionados === "Month") {
        return "mes";
      } else if (movimientosSeleccionados === "Year") {
        return "anyo";
      }

      return "semana";
    };

    const resp = await fetch(
      `http://localhost:4000/transaccion/${apiLlamada(
        movimientosSeleccionados
      )}/${usuario._id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setMovimientos(await resp.json());
  }, [movimientosSeleccionados]);

  useEffect(() => {
    getSaldo();
  });
  useEffect(() => getMovimientos(), [getMovimientos]);

  return (
    <>
      <Grafica
        saldo={saldo}
        movimientosSeleccionados={movimientosSeleccionados}
        setMovimientosSeleccionados={setMovimientosSeleccionados}
        movimientos={movimientos}
      />
      <BotonesTransferencias
        setSaldo={setSaldo}
        saldo={saldo}
        getMovimientos={getMovimientos}
      />
      <Movimientos movimientos={movimientos} />
    </>
  );
};
