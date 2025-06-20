import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";

function App() {
  const [color, setColor] = useState("");
  return (
    <div
      className="contenedorPadre"
      style={{
        background: color
          ? `linear-gradient(to right, ${color}, ${color})`
          : `transparent`,
      }}
    >
      <main className="container">
        <h1 className="text-center">¡Colorin!</h1>
        <Formulario color={color} setColor={setColor} />
      </main>
      <footer className="bg-dark text-light text-center py-2 fs-5">
        <p>
          By <a href="https://github.com/KR3RULIE">KR3RULIE</a>
        </p>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
