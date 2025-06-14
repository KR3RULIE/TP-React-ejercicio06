import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <main>
        <section className="container">
          <h1 className="text-center">Ejercicio 05</h1>
          <Formulario />
        </section>
      </main>
      <footer className="bg-dark text-light text-center py-2 fs-5">
        <p>
          By <a href="https://github.com/KR3RULIE">KR3RULIE</a>
        </p>
        <p>&copy; Todos los derechos reservaos</p>
      </footer>
    </>
  );
}

export default App;
