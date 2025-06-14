import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <div className="sombraContenedor py-3">
      <h4 className="ms-3">Administrar colores</h4>
      <div className="d-flex mb-3 gap-5 bg-info">
        <div className="color"></div>
        <Form.Group className="my-auto w-75">
          <Form.Control type="text" placeholder="Ingrese un color" />
        </Form.Group>
      </div>
      <div className="d-flex mx-4">
        <Button variant="success" type="button" className="ms-auto sombraBoton">
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default Formulario;
