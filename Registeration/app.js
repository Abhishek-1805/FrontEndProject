const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#Email");
const password = document.querySelector("#Password");
const cpassword = document.querySelector("#Cpassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateInput();
});

function validateInput() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = password.value.trim();

  if (usernameVal === "") {
    setError(username, "User Name is Required");
  } else {
    setSucces(username);
  }

  if (emailVal === "") {
    setError(email, "Email Is Required");
  } else if (!validateEmail === "") {
    setError(email, "Plese Enter The Valid Email");
  } else {
    setSucces(email);
  }
  if (passwordVal === "") {
    setError(password, "Password Is Required");
  } else if (passwordVal.length < 8) {
    setError(password, "Password mus be atleast 8 characters");
  } else {
    setSucces(password);
  }
  if (cpasswordVal === "") {
    setError(cpassword, "Confirm Password is required");
  } else if (cpasswordVal !== passwordVal) {
    setError(cpassword, "Password Does Not Match");
  } else {
    setSucces(cpassword);
  }
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorelement = inputGroup.querySelector(".error");

  errorelement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSucces(element) {
  const inputGroup = element.parentElement;
  const errorelement = inputGroup.querySelector(".error");

  errorelement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};
