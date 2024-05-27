import { validate } from "./validation.js";

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");
const submitBtn = document.querySelector("#submitBtn");
const name = document.getElementById('mail__name');
const email = document.getElementById('mail');
const subject = document.getElementById('mail__subject');
const message = document.getElementById('mensagem');

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validate(input.target);
  });
});

textareas.forEach((txta) => {
  txta.addEventListener("blur", (txta) => {
    validate(txta.target);
  });
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!validateFields()) {
    return;
  }
  // Obtener los valores del formulario
  const name_value = name.value;
  const email_value = email.value;
  const subject_value = subject.value;
  const message_value = message.value;


  // Crear el cuerpo de la solicitud
  const requestBody = {
    name: name_value,
    email: email_value,
    subject: subject_value,
    message: message_value
  };

  // Configuración de la solicitud
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  };

  // Enviar la solicitud utilizando fetch
  fetch('https://simple-mail-lilac.vercel.app/send-email', requestOptions)
    .then(response => {
      if (!response.ok) {
        alert("Ha ocurrido un error al enviar el correo");
        clearFields();
        return;
      }
      document.getElementById("success__message").style.visibility = "visible";
      clearFields();
    })
    .catch(error => {
      alert('Error al enviar el correo');
      clearFields();
    });
});

function validateFields() {
  return validate(name) && validate(email) && validate(subject) && validate(message);
}

function clearFields() {
  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
}