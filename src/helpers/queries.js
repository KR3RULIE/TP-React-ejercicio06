const urlcolores = import.meta.env.VITE_API_COLORES;
// get - post - put - delete

export const leerColor = async () => {
  try {
    const respuesta = await fetch(urlcolores);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const obtenerColorPorID = async (id) => {
  try {
    const respuesta = await fetch(urlcolores + `/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const crearColor = async (tareaNueva) => {
  try {
    const respuesta = await fetch(urlcolores, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tareaNueva),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const editarColor = async (tareaEditada, id) => {
  try {
    const respuesta = await fetch(urlcolores + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tareaEditada),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const borrarColorPorID = async (id) => {
  try {
    const respuesta = await fetch(urlcolores + `/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};
