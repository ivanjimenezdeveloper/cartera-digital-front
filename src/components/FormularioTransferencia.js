import jwtDecode from "jwt-decode";
import { useState } from "react";

export const FormularioTransferencia = (props) => {
  const {
    setFormularioActivo,
    setSaldo,
    saldo,
    getMovimientos,
    tipoTransferencia,
  } = props;
  const [direccion, setDireccion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const urlAPI = process.env.REACT_APP_API_URL;

  const addTransaccion = async (direccion, cantidad, tipo) => {
    const cuerpo = { tipo, cantidad };
    const token = localStorage.getItem("token");
    const { usuario } = jwtDecode(token);
    const resp = await fetch(`${urlAPI}transaccion/movimiento/${usuario._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(cuerpo),
    });
    console.log(resp.ok);
    if (resp.ok) {
      if (tipo === "Recieved") {
        setSaldo(saldo + cantidad);
      } else {
        setSaldo(saldo - cantidad);
      }
      setFormularioActivo(false);
      getMovimientos();
    }
  };

  return (
    <div className="col-12 m-1 mt-3">
      <form className="contenedorBasico pb-2">
        <div className="col form-group pt-4">
          <label htmlFor="name">Dirección</label>
          <input
            type="text"
            className="mb-4 d-block form-control"
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>
        <div className="col form-group pt-4">
          <label htmlFor="name">Cantidad</label>
          <input
            type="number"
            className="mb-4 d-block form-control"
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              addTransaccion(
                direccion,
                parseFloat(cantidad),
                tipoTransferencia
              );
            }}
          >
            {tipoTransferencia === "Sent" ? "Enviar" : "Recibir"}
          </button>
        </div>
      </form>
    </div>
  );
};
