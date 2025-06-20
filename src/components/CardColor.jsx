import { Card, Button } from "react-bootstrap";
import "./Formulario.css";
const CardColor = ({ nombreColor }) => {
  const solidoOGradiente = () => {
    if (nombreColor.includes(",")) {
      return "Gradiente";
    } else {
      return "Sólido";
    }
  };
  return (
    <Card className="my-3">
      <Card.Body>
        <div
          className="tamaño w-auto rounded"
          style={{
            background: `linear-gradient(to right, ${nombreColor})`,
          }}
        ></div>

        <div className="d-flex align-items-center justify-content-center gap-2 my-3">
          <Card.Title>
            {solidoOGradiente()}
            <span
              style={{
                background: `linear-gradient(to right, ${nombreColor})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              : {nombreColor}
            </span>
          </Card.Title>
        </div>

        <Button variant="danger" className="d-flex mx-auto">
          🗑
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardColor;
