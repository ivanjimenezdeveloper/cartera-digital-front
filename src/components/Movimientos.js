export const Movimientos = () => {
  return (
    <section className="row movimientos">
      <article className="col-sm-12">
        <div className="row fecha pl-2 mb-2">March 19, 2021 - Today</div>
        <div className="row transaccion py-2">
          <div className="col-2">
            <img
              className="iconoReverso"
              alt="imagen recibido"
              src="img\icons8-send-letter-50.png"
            />
          </div>
          <div className="col-10">
            <div className="row">
              <span className="col estadoTransaccion">Received</span>
              <div className="col">
                <span className="float-right beneficio font-weight-bold">
                  + *** DOGE
                </span>
              </div>
            </div>
            <div className="row">
              <span className="col momentoTransaccion">
                Received at 01:22 AM
              </span>
              <div className="col">
                <span className="float-right font-weight-bold">+$***</span>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="col-sm-12 mt-2">
        <div className="row fecha pl-2 mb-2">March 18, 2021 - Yesterday</div>
        <div className="row transaccion py-2">
          <div className="col-2">
            <img alt="imagen recibido" src="img\icons8-send-letter-50.png" />
          </div>
          <div className="col-10">
            <div className="row">
              <span className="col estadoTransaccion">Sent</span>
              <div className="col">
                <span className="float-right envio font-weight-bold">
                  - *** DOGE
                </span>
              </div>
            </div>
            <div className="row">
              <span className="col momentoTransaccion">Sent at 05:24 AM</span>
              <div className="col">
                <span className="float-right font-weight-bold">-$***</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
