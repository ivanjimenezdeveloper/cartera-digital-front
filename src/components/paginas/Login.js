import { useState } from "react";

export const Login = (props) => {
  const { setLogeado } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ error: false });
  const urlAPI = process.env.REACT_APP_API_URL;

  const entrar = async (username, password) => {
    const credencials = { username, password };
    const resp = await fetch(`${urlAPI}user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credencials),
    });

    if (resp.ok) {
      const { token } = await resp.json();
      localStorage.setItem("token", token);
      setLogeado(true);
    } else {
      setError(await resp.json());
      setLogeado(false);
    }
  };
  return (
    <section className="row">
      <div className="col-12 m-1 mt-3">
        <form className="contenedorBasico pb-2">
          <div className="col form-group pt-4">
            <label htmlFor="name">Usuario</label>
            <input
              type="text"
              className="mb-4 d-block form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col form-group pt-4">
            <label htmlFor="name">Password</label>
            <input
              type="password"
              className="mb-4 d-block form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            {error && error.mensaje}
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                entrar(username, password);
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
