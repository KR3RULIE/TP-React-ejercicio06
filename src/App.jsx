import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <main className="container my-4">
        <h1 className="text-center">¡Colorin!</h1>
        <Formulario />
      </main>
      <footer className="bg-dark text-light text-center py-2 fs-5">
        <p>
          By <a href="https://github.com/KR3RULIE">KR3RULIE</a>
        </p>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
