import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Login } from "./components/paginas/Login";
import { PagPrincipal } from "./components/paginas/PagPrincipal";
import { esTokenExpirado } from "./utilities/usuario";

function App() {
  const [logeado, setLogeado] = useState(
    esTokenExpirado(localStorage.getItem("token"))
  );

  return (
    <div className="container-fluid">
      <Header setLogeado={setLogeado} />
      <main className="row">
        <div className="col">
          {logeado ? <PagPrincipal /> : <Login setLogeado={setLogeado} />}
        </div>
      </main>
    </div>
  );
}

export default App;
