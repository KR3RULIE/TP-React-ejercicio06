import { Container, Row } from "react-bootstrap";
import CardColor from "./CardColor";

const Columna = ({ listaColores, borrarColor }) => {
  return (
    <Container>
      <Row>
        {listaColores.map((itemColor) => (
          <CardColor
            key={itemColor._id}
            nombreColor={itemColor.color}
            borrarColor={borrarColor}
            indice={itemColor._id}
          ></CardColor>
        ))}
      </Row>
    </Container>
  );
};

export default Columna;
