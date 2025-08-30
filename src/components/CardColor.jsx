import { Card, Button, Col } from "react-bootstrap";
import "./Formulario.css";
import Swal from "sweetalert2";
import { borrarColorPorID, leerColor } from "../helpers/queries";

const CardColor = ({ nombreColor, _id, setListaColores }) => {
  const solidoOGradiente = () => {
    if (nombreColor.includes(",")) {
      return "GRADIENTE: ";
    } else {
      return "SÓLIDO: ";
    }
  };
  return (
    <Col sm={12} md={6} lg={4}>
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
            onClick={() => {
              Swal.fire({
                title: "Estas seguro/a?",
                text: "Esta acción es irreversible!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, borralo!",
                cancelButtonText: "No, no lo borres",
              }).then(async (result) => {
                if (result.isConfirmed) {
                  const respuesta = await borrarColorPorID(_id);
                  if (respuesta.status === 200) {
                    Swal.fire({
                      title: "Eliminado!",
                      text: `El color "${nombreColor}" fue eliminado exitosamente`,
                      icon: "success",
                    });
                    const respuestaColores = await leerColor();
                    const coloresActualizados = await respuestaColores.json();
                    setListaColores(coloresActualizados);
                  } else {
                    Swal.fire({
                      title: "Error!",
                      text: `Error al intentar borrar el color "${nombreColor}"`,
                      icon: "error",
                    });
                  }
                }
              });
            }}
          >
            🗑
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardColor;
