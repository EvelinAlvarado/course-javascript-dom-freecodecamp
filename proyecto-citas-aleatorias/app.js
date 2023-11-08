let botonElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

/* Generar un numero aleatorio entre un minimo y un maximo(no incluido) */
function generarEnteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/* Cada vez que se llama a la funcion cambiarCita, se genera un numero aleatorio */
function cambiarCita() {
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  // Se actualiza el texto interno de la cita
  citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
  // Se actualiza el texto interno de la autor
  autorElem.innerText = `"${citas[indiceAleatorio].autor}"`;
}

// cambiarCita();

botonElem.addEventListener("click", cambiarCita);
