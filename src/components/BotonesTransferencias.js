import { useState } from "react/cjs/react.development";
import { FormularioTransferencia } from "./FormularioTransferencia";

export const BotonesTransferencias = (props) => {
  const { setSaldo, saldo, getMovimientos } = props;
  const [tipoTransferencia, setTipoTransferencia] = useState("Sent");
  const [formularioActivo, setFormularioActivo] = useState(false);
  const revertirFormulario = (tipo) => {
    setTipoTransferencia(tipo);
    setFormularioActivo(!formularioActivo);
  };
  return (
    <section className="row">
      <div className="col-12">
        <ul className="lista row justify-content-center">
          <li
            className="btn btn-primary col-5 m-1 font-weight-bold"
            onClick={() => revertirFormulario("Sent")}
          >
            <img alt="imagen enviar" src="img\icons8-send-letter-50.png" />
            Send
          </li>
          <li
            className="btn btn-primary col-5 m-1 font-weight-bold"
            onClick={() => revertirFormulario("Recieved")}
          >
            <img
              className="iconoReverso"
              alt="imagen recibir"
              src="img\icons8-send-letter-50.png"
            />
            Recieve
          </li>
        </ul>
      </div>
      {formularioActivo && (
        <FormularioTransferencia
          setFormularioActivo={setFormularioActivo}
          setSaldo={setSaldo}
          saldo={saldo}
          getMovimientos={getMovimientos}
          tipoTransferencia={tipoTransferencia}
        />
      )}
    </section>
  );
};
