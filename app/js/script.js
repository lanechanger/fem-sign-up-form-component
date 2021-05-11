const firstInput = document.querySelector("#first-name");
const lastInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");

const firstError = document.querySelector(".register--first-error");
const lastError = document.querySelector(".register--last-error");
const emailError = document.querySelector(".register--email-error");
const passError = document.querySelector(".register--pass-error");

const registerBtn = document.querySelector(".register__btn");
const validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

registerBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("clicked register");

  let firstValue = firstInput.value;
  let lastValue = lastInput.value;
  let emailValue = emailInput.value;
  let passValue = passInput.value;

  validateEmpty(firstValue, firstInput, firstError);
  validateEmpty(lastValue, lastInput, lastError);
  validateEmail(emailValue, emailInput, emailError);
  validateEmpty(passValue, passInput, passError);
});

function validateEmpty(value, input, error) {
  if (value == "") {
    // add error state
    console.log("value is empty, adding error state");
    error.classList.add("is-error");
  } else {
    // remove error state
    console.log("value is good, removing error state");
  }
}

function validateEmail(value, input, error) {
  if (value.match(validEmailRegex)) {
    // remove error state
    console.log("valid email, removing error state");
  } else {
    // add error state
    console.log("invalid email, adding error state");
  }
}