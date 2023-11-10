const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaDeTarea = document.getElementById("lista-de-tareas");

function agregarTarea() {
  // Verificar que el input no este vacio, solo si escribieron algo sera adicionada como tarea.
  // ...input.value nos devuelve falsy si tiene una cadena de caracteres vacia y truthy si no lo es
  if (input.value) {
    // ELEMENTO DIV: Crear la estructura interna de la tarea agregada
    let tareaNueva = document.createElement("div");
    tareaNueva.classList.add("tarea");

    // ELEMENTO P: Crear nuevo elemento que contenga el texto ingresado por el usuario
    let texto = document.createElement("p");
    // Se extrae el valor del input para guardarlo en el texto de la tarea (p)
    texto.innerText = input.value;

    // ELEMENTO DIV DE ICONOS: Crear y agregar contenedor de iconos
    let iconos = document.createElement("div");
    iconos.classList.add("iconos");

    // Agregar el div hijo de iconos a la tareaNueva
    tareaNueva.appendChild(texto);
    // Agregar el elemento p hijo de texto a la tareaNueva
    tareaNueva.appendChild(iconos);

    // ELEMENTO I: Se crea el elemento i de Iconos
    // ----completar
    let completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
    // -------cuando se haga click en el icono de completar,se llamara a la funcion
    completar.addEventListener("click", completarTarea);

    // ----eliminar
    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
    // -------cuando se haga click en el icono de eliminar,se llamara a la funcion
    eliminar.addEventListener("click", eliminarTarea);

    // Al elemento div de iconos se le adiciona hijos
    iconos.append(completar, eliminar);

    // AGREGAR LA TAREA NUEVA A LA LISTA DE HTML
    listaDeTarea.appendChild(tareaNueva);

    //Para que despues de agregar la tarea el input se restablezca
    input.value = "";
  } else {
    alert("Por favor ingresa una tarea.");
  }
}

// Funcion que RECIBE EL OBJETO DEL EVENTO(TARGET) que se quiere marcar/desmarcar como completa
function completarTarea(e) {
  // se guarda en tarea, el padre, del padre del objeto del evento(el div de la tarea)
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle("completada");
}

// Funcion que RECIBE EL OBJETO DEL EVENTO(TARGET) que se quiere ELIMINAR
function eliminarTarea(e) {
  // se guarda en tarea, el padre, del padre del objeto del evento(el div de la tarea)
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

// Funcionalidad del boton para agregar una tarea
boton.addEventListener("click", agregarTarea);

// Funcion para que al presionar ENTERse adicione la tarea
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
});
