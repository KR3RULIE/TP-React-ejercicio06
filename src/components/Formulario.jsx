import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Formulario.css";

const Formulario = () => {
  const [color, setColor] = useState("");

  return (
    <section className="formulario-section">
      <Form>
        <Form.Group className="mb-3">
          <div className="d-flex gap-2 align-items-center">
            <div
              className="color-preview"
              style={{ backgroundColor: color || "transparent" }}
            ></div>
            <Form.Control
              className="w-50"
              type="text"
              placeholder="Ingrese un color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <Button variant="info" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default Formulario;
