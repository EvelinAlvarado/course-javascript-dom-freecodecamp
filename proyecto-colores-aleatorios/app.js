//Seleccionar los elementos del DOM
const boton = document.querySelector("button");
const color = document.getElementById("color");

function generarColorHexAleatorio() {
  /* todos los caracteres posibles */
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let index = 0; index < 6; index++) {
    /* se multiplica por 16, que son los caracteres posibles.  Al usar Math.floor, redondeas ese número decimal hacia abajo para obtener un valor entre 0 y 15, que son los índices válidos para los caracteres en la cadena digitos (0-9 y A-F). */
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
  }
  return colorHex;
}

boton.addEventListener("click", function () {
  /* llamamos a la funcion */
  let colorAleatorio = generarColorHexAleatorio();
  /* ---ACTUALIZAR EL TEXTO--- */
  /* queremos cambiar el texto por el nuevo codigo de color aleatorio */
  color.textContent = colorAleatorio;
  /* ---ACTUALIZAR EL COLOR DE FONDO--- */
  /* accedemos al elemento body, para cambiar el background */
  document.body.style.backgroundColor = colorAleatorio;
});
