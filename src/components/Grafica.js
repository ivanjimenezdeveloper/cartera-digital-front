export const Grafica = (props) => {
  const { saldo } = props;
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
            <span className="textoSecundario">$***</span>
          </div>
          <div className="col-sm-12">
            <span className="textoBeneficio">(+*** DOGE)</span>
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <ul className="lista row justify-content-center">
          <li className="btn botonActivo col-3 m-1">Week</li>
          <li className="btn boton col-3 m-1">Month</li>
          <li className="btn boton col-3 m-1">Year</li>
        </ul>
      </div>
    </section>
  );
};
