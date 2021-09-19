export const Header = (props) => {
  return (
    <header className="row">
      <div className="col-12">
        <ul className="row h-100">
          <li className="col my-auto">
            <img alt="boton atras" src="img\icons8-back-arrow-50.png" />
          </li>
          <li className="col my-auto">
            <div className="row justify-content-center">
              <img alt="Logo" src="img\icons8-dogecoin-50.png" />
              <p className="m-0">DogeCoin</p>
            </div>
          </li>
          <li className="col justify-content-end my-auto">
            <img
              alt="ajustes"
              src="img\icons8-settings-24.png"
              className="float-right"
            />
          </li>
        </ul>
      </div>
    </header>
  );
};
