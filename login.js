function checkInputs(formId, buttonId, destination) {
  const form = document.getElementById(formId);
  const button = document.getElementById(buttonId);

  const inputs = form.querySelectorAll('input[required]');

  let allFilled = true;
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      allFilled = false;
    }
  });

  if (allFilled) {
    button.removeAttribute('disabled');
    button.onclick = function() {
    window.location.href = "index.html";
    };
  } else {
    button.setAttribute('disabled', 'true');
    button.onclick = null;
  }
}

document.getElementById('signupForm').addEventListener('input', function() {
  checkInputs('signupForm', 'submitButton', 'index.html');
});

document.getElementById('loginForm').addEventListener('input', function() {
  checkInputs('loginForm', 'loginButton', 'index.html');
});
