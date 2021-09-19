export const BotonesTransferencias = () => {
  return (
    <section className="row">
      <div className="col-12">
        <ul className="lista row justify-content-center">
          <li className="btn btn-primary col-5 m-1 font-weight-bold">
            <img alt="imagen enviar" src="img\icons8-send-letter-50.png" />
            Send
          </li>
          <li className="btn btn-primary col-5 m-1 font-weight-bold">
            <img
              className="iconoReverso"
              alt="imagen recibir"
              src="img\icons8-send-letter-50.png"
            />
            Recieve
          </li>
        </ul>
      </div>
      <div className="col-12 m-1 mt-3">
        <form className="contenedorBasico pb-2">
          <div className="col form-group pt-4">
            <label htmlFor="name">Dirección</label>
            <input type="text" className="mb-4 d-block form-control" />
          </div>
          <div className="col form-group pt-4">
            <label htmlFor="name">Cantidad</label>
            <input type="text" className="mb-4 d-block form-control" />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
