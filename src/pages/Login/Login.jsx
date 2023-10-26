import axios from "../../libs/axios";
import Cookies from "js-cookie";
export function Login() {
  const url = import.meta.env.VITE_URL_LOGIN;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = {
        password: e.target.password.value,
        userName: e.target.email.value,
      };
      console.log(formdata);
      const res = await axios.post(url, formdata);
      Cookies.set("token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  const btn = () => {
    let token = Cookies.get();
    console.log(token);
  };
  return (
    <>
      <section id="Login">
        <div className="Box">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                required
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Chequeate 😉
              </label>
            </div>
            <div className="button__Submit">
              <button type="submit" className="btn btn-primary">
                Iniciar sesión
              </button>

              <button type="button" onClick={btn} className="btn btn-primary">
                ver cookie
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
