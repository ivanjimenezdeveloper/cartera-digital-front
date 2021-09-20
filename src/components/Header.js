import { IoMdArrowBack } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
export const Header = (props) => {
  const { setLogeado } = props;
  const deslogear = () => {
    localStorage.removeItem("token");
    setLogeado(false);
  };

  return (
    <header className="row">
      <div className="col-12">
        <ul className="row h-100">
          <li className="col my-auto" onClick={() => deslogear()}>
            <IoMdArrowBack className="icono" />
          </li>
          <li className="col my-auto">
            <div className="row justify-content-center">
              <img alt="Logo" src="img\dogecoin-doge-logo-alternative.svg" />
              <p className="m-0">DogeCoin</p>
            </div>
          </li>
          <li className="col justify-content-end my-auto">
            <FiSettings className="float-right icono" />
          </li>
        </ul>
      </div>
    </header>
  );
};
