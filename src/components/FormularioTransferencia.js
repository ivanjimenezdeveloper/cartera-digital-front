export const FormularioTransferencia = () => {
  return (
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
  );
};
