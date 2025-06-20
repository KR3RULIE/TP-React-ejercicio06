import { Container, Row, Col } from "react-bootstrap";
import CardColor from "./CardColor";

const Columna = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CardColor></CardColor>
        </Col>
      </Row>
    </Container>
  );
};

export default Columna;
