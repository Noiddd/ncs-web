const form = document.getElementById("form");
const username = document.getElementById("uname");
const password = document.getElementById("password");
const email = document.getElementById("email");
const name = document.getElementById("name");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const validateInputs = () => {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const nameValue = name.value;

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (nameValue === "") {
    setError(name, "Name is required");
  } else {
    setSuccess(name);
  }
};

const setError = (element, message) => {
  const errorDisplay = element.parentElement.querySelector(".error");

  errorDisplay.innerText = message;
  element.parentElement.classList.add("error");
  element.parentElement.classList.remove("success");
};

const setSuccess = (element) => {
  const errorDisplay = element.parentElement.querySelector(".error");

  errorDisplay.innerText = "";
  element.parentElement.classList.add("success");
  element.parentElement.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
