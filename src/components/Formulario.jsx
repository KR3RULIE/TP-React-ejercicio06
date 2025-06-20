import { Form, Button } from "react-bootstrap";
import "./Formulario.css";

const Formulario = ({ color, setColor }) => {
  return (
    <section
      className="formulario-section"
      style={{
        boxShadow: color ? `4px 4px 10px ${color}` : "4px 4px 10px black",
      }}
    >
      <Form>
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
              onChange={(nuevoColor) => setColor(nuevoColor.target.value)}
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
    </section>
  );
};

export default Formulario;
