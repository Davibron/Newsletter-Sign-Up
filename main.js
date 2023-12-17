function checkInput() {
  const input = document.getElementById("email");
  const errorMessage = document.getElementById("errorDiv");
  const main = document.getElementById("main");

  if (input.value.trim() === "" || !isValidEmail(input.value)) {
    input.classList.add("error");
    errorMessage.style.display = "block";
  } else {
    input.classList.remove("error");
    errorMessage.style.display = "none";
  }

  if (input.value.trim() !== "" && isValidEmail(input.value)) {
    main.innerHTML = `<div class='successState'>
      <svg id='successImg' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
      <h1>Thanks for subscribing!</h1>
      <p id='successP'>
        A confirmation email has been sent to <b>${input.value}</b>. Please open it and click the button inside to confirm your subscription
      </p>
      <button onclick='dismiss()'>Dismiss message</button>
    </div>`;
  }
  document.body.classList.add('successState');
}

function dismiss() {
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

