const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

/* valores iniciales de los inputs */
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

/* Actualizar el texto de lo párrafos */
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  // Actuliza el body en el DOM
  document.body.style.backgroundColor = colorRGB;
}

// Para actualizar el input Red (Rojo)
inputRojo.addEventListener("change", (e) => {
  // Se extrae el valor del target del evento
  rojo = e.target.value;
  // O Tambien se puede usar la variable local inputRojo
  rojo = inputRojo.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar el input Green (Verde)
inputVerde.addEventListener("change", (e) => {
  // Se extrae el valor del target del evento
  verde = e.target.value;
  // O Tambien se puede usar la variable local inputVerde
  verde = inputVerde.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar el input Blue (Azul)
inputAzul.addEventListener("change", (e) => {
  // Se extrae el valor del target del evento
  azul = e.target.value;
  // O Tambien se puede usar la variable local inputAzul
  azul = inputAzul.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});
