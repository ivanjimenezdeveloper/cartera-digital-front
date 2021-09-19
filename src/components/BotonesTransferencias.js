import { useState } from "react/cjs/react.development";
import { FormularioTransferencia } from "./FormularioTransferencia";

export const BotonesTransferencias = () => {
  const [formularioActivo, setFormularioActivo] = useState(false);
  const revertirSend = () => {
    setFormularioActivo(!formularioActivo);
  };
  return (
    <section className="row">
      <div className="col-12">
        <ul className="lista row justify-content-center">
          <li
            className="btn btn-primary col-5 m-1 font-weight-bold"
            onClick={() => revertirSend()}
          >
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
      {formularioActivo && <FormularioTransferencia />}
    </section>
  );
};
