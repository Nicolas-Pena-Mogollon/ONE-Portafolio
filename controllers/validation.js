/**
 * validates the information of an input
 * @param {Element} input an input DOM object
 */
export function validate(input) {
    // Obtain the dataset
    const inputType = input.dataset.tipo;

    if (input.validity.valid) {
        input.parentElement.classList.remove("input__container__invalid");
        input.parentElement.querySelector(".input__message__error").innerHTML = "";
        return true;
    } else {
        input.parentElement.classList.add("input__container__invalid");
        input.parentElement.querySelector(".input__message__error").innerHTML =
            showMessageError(inputType, input);
        return false;
    }
}

const errorTypes = [
    "tooShort",
    "tooLong",
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const errorMessages = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
        tooShort: "El campo nombre debe tener al menos 10 caracteres",
        tooLong: "El campo nombre debe tener menos de 50 caracteres",
        patternMismatch: "No se permite el ingreso de caracteres especiales",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    asunto: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "No se permite el ingreso de caracteres especiales",
    },
    mensaje: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres.",
    },
};

/**
 * Extracts the invalidity type to assign the respective message
 * @param {String} inputType dataset type
 * @param {Element} input the input DOM element
 * @returns 
 */
function showMessageError(inputType, input) {
    let message = "";
    errorTypes.forEach((error) => {
        if (input.validity[error]) {
            message = errorMessages[inputType][error];
        }
    });
    return message;
}