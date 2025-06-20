import { Card, Button } from "react-bootstrap";
import "./Formulario.css";

const CardColor = ({ nombreColor, borrarColor, indice }) => {
  const solidoOGradiente = () => {
    if (nombreColor.includes(",")) {
      return "GRADIENTE: ";
    } else {
      return "SÓLIDO: ";
    }
  };
  return (
    <Card className="my-3">
      <Card.Body>
        <div
          className="tamanio w-auto rounded"
          style={{
            background: `linear-gradient(to right, ${nombreColor})`,
          }}
        ></div>

        <div className="d-flex align-items-center justify-content-center gap-2 my-3">
          <Card.Text>
            {solidoOGradiente()}
            <span
              style={{
                background: `linear-gradient(to right, ${nombreColor})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              {nombreColor.toUpperCase()}
            </span>
          </Card.Text>
        </div>

        <Button
          variant="danger"
          className="d-flex mx-auto"
          onClick={() => borrarColor(indice)}
        >
          🗑
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardColor;
