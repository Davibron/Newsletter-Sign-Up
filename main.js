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

function adjustImageVisibility() {
  const mobileImage = document.getElementById("mobileImage");
  const desktopImage = document.getElementById("desktopImage");

  if (window.matchMedia('(max-width: 1023px )').matches) {
    mobileImage.style.display = "block";
    desktopImage.style.display = "none";
  } else {
    mobileImage.style.display = "none";
    desktopImage.style.display = "block";
  }
}

window.addEventListener('resize', adjustImageVisibility);

adjustImageVisibility()

