import { getHoraString, getStringMovimiento } from "../utilities/fechas";

export const Movimientos = (props) => {
  const { movimientos } = props;

  const renderizarMovimiento = (movimiento) => {
    const simbolo = movimiento.tipo === "Recieved" ? "+" : "-";
    const color = movimiento.tipo === "Recieved" ? "beneficio" : "envio";
    const icono = movimiento.tipo === "Recieved" ? "iconoReverso" : "";
    return (
      <article className="col-sm-12" key={movimiento.fecha}>
        <div className="row fecha pl-2 mb-2">
          {getStringMovimiento(movimiento.fecha)}
        </div>
        <div className="row transaccion py-2">
          <div className="col-2">
            <img
              className={`${icono}`}
              alt="imagen recibido"
              src="img\icons8-send-letter-50.png"
            />
          </div>
          <div className="col-10">
            <div className="row">
              <span className="col estadoTransaccion">{movimiento.tipo}</span>
              <div className="col">
                <span className={`float-right ${color} font-weight-bold`}>
                  {`${simbolo} ${movimiento.cantidad}`} DOGE
                </span>
              </div>
            </div>
            <div className="row">
              <span className="col momentoTransaccion">
                {movimiento.tipo} at {getHoraString(movimiento.fecha)}
              </span>
              <div className="col">
                <span className="float-right font-weight-bold">{`${simbolo} $${
                  movimiento.cantidad * 0.24
                }`}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  };
  return (
    <section className="row movimientos">
      {movimientos.map((movimiento) => renderizarMovimiento(movimiento))}
    </section>
  );
};
