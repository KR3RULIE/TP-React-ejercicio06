import { Form, Button } from "react-bootstrap";
import "./Formulario.css";
import Columna from "./Columna";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { crearColor, leerColor } from "../helpers/queries.js";
import Swal from "sweetalert2";

const Formulario = ({ color, setColor }) => {
  const [listaColores, setListaColores] = useState([]);

  useEffect(() => {
    obtenerColores();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const obtenerColores = async () => {
    const repuesta = await leerColor();
    if (repuesta.status === 200) {
      const datos = await repuesta.json();
      setListaColores(datos);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrio un error al intetar cargar los colores",
      });
    }
  };

  const agregarColores = async (data) => {
    const respuesta = await crearColor(data);
    if (respuesta.status === 201) {
      Swal.fire({
        title: "Color creado!",
        text: `El color "${data.color}" fue creado exitosamente`,
        icon: "success",
      });
      reset();
      setColor("white");
    } else {
      Swal.fire({
        title: "¡Error!",
        text: `Ocurrio un error al intentar crear el color "${data.color}"`,
        icon: "error",
      });
    }
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
              {...register("color", {
                required: "La tarea es un dato obligatorio",
                onChange: (e) => setColor(e.target.value),
              })}
            />
          </div>
          <div className="d-flex gap-2">
            <Button
              variant="info"
              type="submit"
              className="mt-3 ms-auto sombreado"
            >
              Agregar color
            </Button>
            <Button
              variant="success"
              type="button"
              className="mt-3 sombreado"
              onClick={obtenerColores}
            >
              Cargar colores BD
            </Button>
          </div>
        </Form.Group>
      </Form>
      <Columna listaColores={listaColores} setListaColores={setListaColores}></Columna>
    </section>
  );
};

export default Formulario;
