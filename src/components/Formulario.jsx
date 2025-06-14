import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <div>
      <Form>
        <Form.Group className="d-felx mb-3" controlId="controlInput1">
          <Form.Control type="email" placeholder="Ingrese un color" />
          <Button>Enviar</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Formulario;
