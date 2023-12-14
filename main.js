function checkInput() {
  const input = document.getElementById("email");
  const errorMessage = document.getElementById("errorDiv");

  if (input.value.trim() === "" || !isValidEmail(input.value)) {
    input.classList.add("error");
    errorMessage.style.display = "block";
  } else {
    input.classList.remove("error");
    errorMessage.style.display = "none";
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}