import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  clientServices
    .crearCliente(nombre, email)
    .then(function () {
      window.location.href = "../screens/registro_completado.html";
    })
    .catch((error) => {
      console.log(error);
    });
});
