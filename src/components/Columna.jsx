import { Container, Row, Col } from "react-bootstrap";
import CardColor from "./CardColor";

const Columna = ({ colores, borrarColor }) => {
  return (
    <Container>
      <Row>
        {colores.map((itemColor, indice) => (
          <CardColor
            key={`${itemColor}-${indice}`}
            nombreColor={itemColor}
            borrarColor={borrarColor}
            indice={indice}
          ></CardColor>
        ))}
      </Row>
    </Container>
  );
};

export default Columna;
