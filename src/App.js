import "./App.css";

function App() {
  return (
    <div class="container-fluid">
      <header class="row">
        <div class="col-12">
          <ul class="row h-100">
            <li class="col my-auto">
              <img alt="boton atras" src="img\icons8-back-arrow-50.png" />
            </li>
            <li class="col my-auto">
              <div class="row justify-content-center">
                <img alt="Logo" src="img\icons8-dogecoin-50.png" />
                <p class="m-0">DogeCoin</p>
              </div>
            </li>
            <li class="col justify-content-end my-auto">
              <img
                alt="ajustes"
                src="img\icons8-settings-24.png"
                class="float-right"
              />
            </li>
          </ul>
        </div>
      </header>
      <main class="row">
        <div class="col">
          <section class="row m-1 contenedorBasico mt-3">
            <div class="grafica w-100 col-sm-12 mt-1">
              <div class="row ml-1 mt-2">
                <div class="col-sm-12">
                  <div class="row">
                    <div class="col-8">
                      <span class="m-0 textoPrincipal">*** DOGE</span>
                    </div>
                    <div class="col-4">
                      <img
                        class="float-right mr-1"
                        alt="ocultar"
                        src="img\icons8-hide-30.png"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <span class="textoSecundario">$***</span>
                </div>
                <div class="col-sm-12">
                  <span class="textoBeneficio">(+*** DOGE)</span>
                </div>
              </div>
            </div>
            <div class="col-sm-12">
              <ul class="lista row justify-content-center">
                <li class="btn botonActivo col-3 m-1">Week</li>
                <li class="btn boton col-3 m-1">Month</li>
                <li class="btn boton col-3 m-1">Year</li>
              </ul>
            </div>
          </section>
          <section class="row">
            <div class="col-12">
              <ul class="lista row justify-content-center">
                <li class="btn btn-primary col-5 m-1 font-weight-bold">
                  <img
                    alt="imagen enviar"
                    src="img\icons8-send-letter-50.png"
                  />
                  Send
                </li>
                <li class="btn btn-primary col-5 m-1 font-weight-bold">
                  <img
                    class="iconoReverso"
                    alt="imagen recibir"
                    src="img\icons8-send-letter-50.png"
                  />
                  Recieve
                </li>
              </ul>
            </div>
            <div class="col-12 m-1 mt-3">
              <form class="contenedorBasico pb-2">
                <div class="col form-group pt-4">
                  <label htmlFor="name">Dirección</label>
                  <input type="text" class="mb-4 d-block form-control" />
                </div>
                <div class="col form-group pt-4">
                  <label htmlFor="name">Cantidad</label>
                  <input type="text" class="mb-4 d-block form-control" />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </section>
          <section class="row movimientos">
            <article class="col-sm-12">
              <div class="row fecha pl-2 mb-2">March 19, 2021 - Today</div>
              <div class="row transaccion py-2">
                <div class="col-2">
                  <img
                    class="iconoReverso"
                    alt="imagen recibido"
                    src="img\icons8-send-letter-50.png"
                  />
                </div>
                <div class="col-10">
                  <div class="row">
                    <span class="col estadoTransaccion">Received</span>
                    <div class="col">
                      <span class="float-right beneficio font-weight-bold">
                        + *** DOGE
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <span class="col momentoTransaccion">
                      Received at 01:22 AM
                    </span>
                    <div class="col">
                      <span class="float-right font-weight-bold">+$***</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article class="col-sm-12 mt-2">
              <div class="row fecha pl-2 mb-2">March 18, 2021 - Yesterday</div>
              <div class="row transaccion py-2">
                <div class="col-2">
                  <img
                    alt="imagen recibido"
                    src="img\icons8-send-letter-50.png"
                  />
                </div>
                <div class="col-10">
                  <div class="row">
                    <span class="col estadoTransaccion">Sent</span>
                    <div class="col">
                      <span class="float-right envio font-weight-bold">
                        - *** DOGE
                      </span>
                    </div>
                  </div>
                  <div class="row">
                    <span class="col momentoTransaccion">Sent at 05:24 AM</span>
                    <div class="col">
                      <span class="float-right font-weight-bold">-$***</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
