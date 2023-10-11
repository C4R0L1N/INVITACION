// Obtén el elemento del botón por su ID
var miBoton = document.getElementById("miBoton");

// Agrega un manejador de eventos para el clic del botón
miBoton.addEventListener("click", function() {
miBoton.classList.add("subir");

setTimeout(function(){window.location.href = "Invitacion.html";}, 900);
});



