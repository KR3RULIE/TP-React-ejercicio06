import { Card, Button } from "react-bootstrap";
import "./CardColor.css"
const CardColor = () => {
  return (
    <Card>
      <Card.Body>
        <div className="tamaño w-auto rounded"></div>
        <Card.Title className="text-center">#color</Card.Title>
        <Button variant="danger" className="d-flex mx-auto">🗑</Button>
      </Card.Body>
    </Card>
  );
};

export default CardColor;
