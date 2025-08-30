import { Container, Row } from "react-bootstrap";
import CardColor from "./CardColor";

const Columna = ({ listaColores, actualizarTabla }) => {
  return (
    <Container>
      <Row>
        {listaColores.map((itemColor) => (
          <CardColor
            key={itemColor._id + itemColor.color}
            nombreColor={itemColor.color}
            _id={itemColor._id}
            actualizarTabla={actualizarTabla}
          ></CardColor>
        ))}
      </Row>
    </Container>
  );
};

export default Columna;
