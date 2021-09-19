import { useEffect, useState } from "react/cjs/react.development";
import { getCambioSaldo } from "../utilities/transacciones";

export const Grafica = (props) => {
  const {
    saldo,
    movimientos,
    movimientosSeleccionados,
    setMovimientosSeleccionados,
  } = props;
  const [saldoCambio, setSaldoCambio] = useState(0);

  useEffect(
    () => setSaldoCambio(getCambioSaldo(movimientos)),
    [movimientos, setSaldoCambio]
  );

  const setClaseBoton = (movimientosSeleccionados, tipo) =>
    movimientosSeleccionados === tipo ? "botonActivo" : "boton";

  return (
    <section className="row m-1 contenedorBasico mt-3">
      <div className="grafica w-100 col-sm-12 mt-1">
        <div className="row ml-1 mt-2">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-8">
                <span className="m-0 textoPrincipal">{saldo} DOGE</span>
              </div>
              <div className="col-4">
                <img
                  className="float-right mr-1"
                  alt="ocultar"
                  src="img\icons8-hide-30.png"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <span className="textoSecundario">${saldo * 0.24}</span>
          </div>
          <div className="col-sm-12">
            <span className="textoBeneficio">
              ({`${saldoCambio > 0 ? "+" : ""} ${saldoCambio}`} DOGE)
            </span>
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <ul className="lista row justify-content-center">
          <li
            className={`btn ${setClaseBoton(
              movimientosSeleccionados,
              "Week"
            )} col-3 m-1`}
            onClick={() => setMovimientosSeleccionados("Week")}
          >
            Week
          </li>
          <li
            className={`btn ${setClaseBoton(
              movimientosSeleccionados,
              "Month"
            )} col-3 m-1`}
            onClick={() => setMovimientosSeleccionados("Month")}
          >
            Month
          </li>
          <li
            className={`btn ${setClaseBoton(
              movimientosSeleccionados,
              "Year"
            )} col-3 m-1`}
            onClick={() => setMovimientosSeleccionados("Year")}
          >
            Year
          </li>
        </ul>
      </div>
    </section>
  );
};
