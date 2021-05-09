console.log("Hello World");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const firstError = document.querySelector(".register--first-error");
const lastError = document.querySelector(".register--last-error");
const emailError = document.querySelector(".register--email-error");
const passError = document.querySelector(".register--pass-error");

const registerBtn = document.querySelector(".register__btn");

registerBtn.addEventListener("click", function () {
  console.log("clicked register");

  let firstValue = firstName.value;
  let lastValue = lastName.value;
  let emailValue = email.value;
  let passValue = password.value;


});