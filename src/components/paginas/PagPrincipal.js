import { BotonesTransferencias } from "../BotonesTransferencias";
import { Grafica } from "../Grafica";
import { Movimientos } from "../Movimientos";

export const PagPrincipal = () => {
  return (
    <>
      <Grafica />
      <BotonesTransferencias />
      <Movimientos />
    </>
  );
};
