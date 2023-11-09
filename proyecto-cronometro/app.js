const cronometro = document.getElementById("cronometro");
const botonInicioPausa = document.getElementById("boton-inicio-pausa");
const botonReiniciar = document.getElementById("boton-reiniciar");

/* ------ACTUALIZACION DE LOS SEGUNDOS, MINUTOS Y HORAS-------- */
/* Variables */
let [horas, minutos, segundos] = [0, 0, 0];

/* intervalo de tiempo que debe transcurrir antes de actualizar el cronometro o el estado del cronometro (pausado o iniciado) */
let intervaloDeTiempo;

/* 2 estados del cronometro pausado o iniciado */
let estadoDelCronometro = "pausado";

function actualizarCronometro() {
  /* logica para que actualice los segundos, horas y minutos */
  segundos++;

  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;
    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }

  /* se llama a la funcion asignaFormato() para poder actualizar el formato y se guarda en las varibles */
  const segundosConFormato = asignarFormato(segundos);
  const minutosConFormato = asignarFormato(minutos);
  const horasConFormato = asignarFormato(horas);

  /* Despues de tener el formato de los segundos,minutos y horas, se actulizara el cronometro accediendo al texto del cronometro */
  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

/* Una funcion que adicione 1 0 adelante si es de 1 digito y que quite el 0 si son 2 digitos */
function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? "0" + unidadDeTiempo : unidadDeTiempo;
}

/* --------FUNCIONALIDAD DEL BOTON INICIAR/PAUSAR---------- */
botonInicioPausa.addEventListener("click", function () {
  /* funcion que depende el estado actual de cronometro(pausado o iniciado) */
  if (estadoDelCronometro === "pausado") {
    /* actualizar el cronometro cada intervalo de tiempo, para esto se usar el metodo setInterval() del objeto window, alli se llama a la funcion actualizarCronometro() y se le pide que se actualice cada 1000 milisegundos=1 segundo  */
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);

    /* actuzalizar el simbolo del boton por el boton pausa - se recomienda no utilizar innerHTML por problemas de seguridad*/
    botonInicioPausa.innerHTML = `<i class="bi bi-pause-fill"></i>`;

    /* Por defecto, el boton, tiene la clase iniciar, pero cuando el cronometro esta andando se adicionara la clase pausar y el nuevo estadoDelCronometro sera iniciado*/
    // botonInicioPausa.classList.remove("iniciar");
    // botonInicioPausa.classList.add("pausar");
    botonInicioPausa.classList.replace("iniciar", "pausar");
    estadoDelCronometro = "iniciado";
  } else {
    /* Cuando estadoDelCronometro === "iniciado" */
    /* Se debe eliminar el setInterval */
    window.clearInterval(intervaloDeTiempo);

    /* Se cambia el el simbolo del boton */
    botonInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;

    /* Se elimina la clase pausar y se agrega la clase iniciar */
    // botonInicioPausa.classList.remove("pausar");
    // botonInicioPausa.classList.add("iniciar");
    botonInicioPausa.classList.replace("pausar", "iniciar");

    /* Se cambia el estadoDelCronometro */
    estadoDelCronometro = "pausado";
  }
});

/* --------FUNCIONALIDAD DEL BOTON REINICAR---------- */
botonReiniciar.addEventListener("click", function () {
  /* Se eliminar el setInterval() del la funcion intervaloDeTiempo() */
  window.clearInterval(intervaloDeTiempo);

  /* Se reinicia los valores de las variables */
  horas = 0;
  minutos = 0;
  segundos = 0;

  /* Se reinicia el texto del cronometro a cero */
  cronometro.innerText = `00:00:00`;

  /* Se actualiza el boton de pausa/iniciar para que cambie al simbolo de Play y se actualizan las clases y e estado del cronometro*/
  botonInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
  // botonInicioPausa.classList.remove("pausar");
  // botonInicioPausa.classList.add("iniciar");
  botonInicioPausa.classList.replace("pausar", "iniciar");
  estadoDelCronometro = "pausado";
});
