import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Login } from "./components/paginas/Login";
import { PagPrincipal } from "./components/paginas/PagPrincipal";

function App() {
  const [logeado, setLogeado] = useState(false);
  return (
    <div className="container-fluid">
      <Header />
      <main className="row">
        <div className="col">{logeado ? <PagPrincipal /> : <Login />}</div>
      </main>
    </div>
  );
}

export default App;
