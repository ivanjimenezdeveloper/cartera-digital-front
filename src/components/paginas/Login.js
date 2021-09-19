export const Login = () => {
  return (
    <section class="row">
      <div class="col-12 m-1 mt-3">
        <form class="contenedorBasico pb-2">
          <div class="col form-group pt-4">
            <label htmlFor="name">Usuario</label>
            <input type="text" class="mb-4 d-block form-control" />
          </div>
          <div class="col form-group pt-4">
            <label htmlFor="name">Password</label>
            <input type="password" class="mb-4 d-block form-control" />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
