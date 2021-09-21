import { useState } from "react";
import { FormularioTransferencia } from "./FormularioTransferencia";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

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
            className="btn btn-primary col-5 m-1 font-weight-bold "
            onClick={() => revertirFormulario("Sent")}
          >
            <BiArrowToTop className="iconoBotonGrande mr-1" />
            Send
          </li>
          <li
            className="btn btn-primary col-5 m-1 font-weight-bold"
            onClick={() => revertirFormulario("Recieved")}
          >
            <BiArrowToBottom className="iconoBotonGrande mr-1" />
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
