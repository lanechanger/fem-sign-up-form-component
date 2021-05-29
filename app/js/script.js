const firstInput = document.querySelector("#first-name");
const lastInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");

const firstError = document.querySelector("#firstError");
const lastError = document.querySelector("#lastError");
const emailError = document.querySelector("#emailError");
const passError = document.querySelector("#passError");

const registerBtn = document.querySelector("#freeTrialBtn");

const inputIsErrorClass = "register__input--is-error";
const errorIsErrorClass = "is-error";

const validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let firstValue, lastValue, emailValue, passValue;

firstInput.addEventListener("blur", function () {
  console.log("inline validation for first name");
  validateEmpty(firstInput, firstError);
});

lastInput.addEventListener("blur", function () {
  console.log("inline validation for last name");
  validateEmpty(lastInput, lastError);
});

emailInput.addEventListener("blur", function () {
  console.log("inline validation for email");
  validateEmail(emailInput, emailError);
});

passInput.addEventListener("blur", function () {
  console.log("inline validation for password");
  validateEmpty(passInput, passError);
});

registerBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("clicked register");

  if (validateEmpty(firstInput, firstError) &
    validateEmpty(lastInput, lastError) &
    validateEmail(emailInput, emailError) &
    validateEmpty(passInput, passError)) {
    // submit form only if all inputs validate
    console.log("all 4 inputs valid, submitting");
    document.querySelector(".register").submit();
  }
});


function validateEmpty(input, error) {
  if (input.value == "") {
    // add error state
    console.log("value is empty, adding error state");
    addErrorClasses(input, error);
    return false;
  } else {
    // remove error state
    console.log("value is good, removing error state");
    removeErrorClasses(input, error);
    return true;
  }
}

function validateEmail(input, error) {
  if (input.value.match(validEmailRegex)) {
    // remove error state
    console.log("valid email, removing error state");
    removeErrorClasses(input, error);
    return true;
  } else {
    // add error state
    console.log("invalid email, adding error state");
    addErrorClasses(input, error);
    return false;
  }
}

function addErrorClasses(input, error) {
  input.classList.add(inputIsErrorClass);
  error.classList.add(errorIsErrorClass);
  input.setAttribute("aria-invalid", true);
  error.setAttribute("aria-live", "assertive");
}

function removeErrorClasses(input, error) {
  input.classList.remove(inputIsErrorClass);
  error.classList.remove(errorIsErrorClass);
  input.setAttribute("aria-invalid", false);
  error.setAttribute("aria-live", "off");
}