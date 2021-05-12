const firstInput = document.querySelector("#first-name");
const lastInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");

const firstError = document.querySelector(".register--first-error");
const lastError = document.querySelector(".register--last-error");
const emailError = document.querySelector(".register--email-error");
const passError = document.querySelector(".register--pass-error");

const registerBtn = document.querySelector(".register__btn");

const inputIsErrorClass = "register__input--is-error";
const errorIsErrorClass = "is-error";

const validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

registerBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("clicked register");

  let firstValue = firstInput.value;
  let lastValue = lastInput.value;
  let emailValue = emailInput.value;
  let passValue = passInput.value;

  if (validateEmpty(firstValue, firstInput, firstError) &&
    validateEmpty(lastValue, lastInput, lastError) &&
    validateEmail(emailValue, emailInput, emailError) &&
    validateEmpty(passValue, passInput, passError)) {
    // submit form only if all inputs validate
    console.log("all 4 inputs valid, submitting");
    document.querySelector(".register").submit();
  }
});

function validateEmpty(value, input, error) {
  if (value == "") {
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

function validateEmail(value, input, error) {
  if (value.match(validEmailRegex)) {
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
}

function removeErrorClasses(input, error) {
  input.classList.remove(inputIsErrorClass);
  error.classList.remove(errorIsErrorClass);
}