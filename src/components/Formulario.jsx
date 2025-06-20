import { Form, Button } from "react-bootstrap";
import "./Formulario.css";
import Columna from "./Columna";
import { useState } from "react";

const Formulario = ({ color, setColor }) => {
  const [colores, setColores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores, color])
    setColor("")
  };

  return (
    <section
      className="formulario-section"
      style={{
        boxShadow: color ? `4px 4px 10px ${color}` : "4px 4px 10px black",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <div className="d-flex gap-2 align-items-center">
            <div
              className="color-preview"
              style={{
                background: color
                  ? `linear-gradient(to right, ${color})`
                  : "transparent",
              }}
            ></div>
            <Form.Control
              type="text"
              placeholder="Ingrese un color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="d-flex">
            <Button
              variant="info"
              type="submit"
              className="mt-3 ms-auto sombreado"
            >
              Agregar color
            </Button>
          </div>
        </Form.Group>
      </Form>
      <Columna></Columna>
    </section>
  );
};

export default Formulario;
