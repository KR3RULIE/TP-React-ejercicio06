import { Form, Button } from "react-bootstrap";
import "./Formulario.css";
import Columna from "./Columna";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Formulario = ({ color, setColor }) => {
  const coloresLocalstorage =
    JSON.parse(localStorage.getItem("listaColores")) || [];
  const [colores, setColores] = useState(coloresLocalstorage);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log("desde use efect");
    localStorage.setItem("listaColores", JSON.stringify(colores));
  }, [colores]);

  const agregarColores = (data) => {
    setColores([...colores, data.inputColors]);
    reset();
    setColor("white");
  };

  const borrarColor = (indiceDelColor) => {
    const coloresFiltrados = colores.filter(
      (item, index) => index !== indiceDelColor
    );
    setColores(coloresFiltrados);
  };

  return (
    <section
      className="formulario-section my-3"
      style={{
        boxShadow: color ? `4px 4px 10px ${color}` : "4px 4px 10px black",
      }}
    >
      <Form onSubmit={handleSubmit(agregarColores)}>
        <Form.Group className="mb-3">
          <div className="d-flex gap-2 align-items-center">
            <div
              className="color-preview"
              style={{
                background: color
                  ? `linear-gradient(to right, ${color})`
                  : "transparent",
              }}
            ></div>
            <Form.Control
              type="text"
              placeholder="Ingrese un color"
              {...register("inputColors", {
                required: "La tarea es un dato obligatorio",
                onChange: (e) => setColor(e.target.value),
              })}
            />
          </div>
          <div className="d-flex">
            <Button
              variant="info"
              type="submit"
              className="mt-3 ms-auto sombreado"
            >
              Agregar color
            </Button>
          </div>
        </Form.Group>
      </Form>
      <Columna colores={colores} borrarColor={borrarColor}></Columna>
    </section>
  );
};

export default Formulario;
