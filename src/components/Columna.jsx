import { Container, Row, Col } from "react-bootstrap";
import CardColor from "./CardColor";

const Columna = ({ colores }) => {
  return (
    <Container>
      <Row>
        <Col>
          {colores.map((itemColor, indice) => (
            <CardColor key={indice} nombreColor={itemColor}></CardColor>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Columna;
