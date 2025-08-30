import { Container, Row } from "react-bootstrap";
import CardColor from "./CardColor";

const Columna = ({ listaColores , setListaColores }) => {
  return (
    <Container>
      <Row>
        {listaColores.map((itemColor) => (
          <CardColor
            key={itemColor._id}
            nombreColor={itemColor.color}
            _id={itemColor._id}
            setListaColores={setListaColores}
          ></CardColor>
        ))}
      </Row>
    </Container>
  );
};

export default Columna;
