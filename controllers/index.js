import { validate } from "./validation.js";

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");
const submitBtn = document.querySelector("#submitBtn");

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
  alert("Función no disponible");
})
