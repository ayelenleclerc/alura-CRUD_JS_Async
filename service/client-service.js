const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((response) => response.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      email,
      id: uuid.v4(),
    }),
  });
};

const eliminarCLiente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

const detalleCliente = async (id) => {
  const response = await fetch(`http://localhost:3000/perfil/${id}`);
  return await response.json();
};

const actualizarCLiente = async (nombre, email, id) => {
  try {
    const response = await fetch(`http://localhost:3000/perfil/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        email,
        id,
      }),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCLiente,
  detalleCliente,
  actualizarCLiente,
};
