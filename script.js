document.addEventListener("DOMContentLoaded", function (event) {
  let boton = document.querySelector(".button-menu-toggle");
  const botonId = document.getElementById("mybutton");
  const form = document.getElementById("myForm");
  boton.addEventListener("click", function () {
    alert("¡Hola, has hecho click en el boton de menu, desplegando..!");
  });
  function showAlert() {
    alert('¡Hola, has tocado mi boton seras redirigido a un nuevo video!');
  }
  if (form) {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      validateForm();
    });
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }


  document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function () {
      document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
    })
});