/* --------------SELECCIONAR ELEMENTOS DEL DOM------------------- */

const misToppings = document.getElementsByTagName("li");
/* *innerHTML: nos da el codigo HTML - String*/
/* *innerText: acceso al texto del elemento - String*/
console.log(misToppings);

const toppingsFondoMarron = document.getElementsByClassName("fondo-marron");
console.log(toppingsFondoMarron);

const primerToppingNaranja = document.querySelector(".topping.fondo-naranja");
console.log(primerToppingNaranja);

const toppingNaranja = document.querySelector("ul li.fondo-naranja");
console.log(toppingNaranja);

const primerToppingNoFondoMarron = document.querySelector(
  "ul li:not(.fondo-marron"
);
console.log(primerToppingNoFondoMarron);

const toppingFondoNaranja = document.querySelectorAll(".topping.fondo-naranja");
console.log(toppingFondoNaranja);
console.log(toppingFondoNaranja[1]);
console.log(toppingFondoNaranja.length);
console.log(typeof toppingFondoNaranja); //Object

/* ------------------ESTILOS CON JS----------------------- */

const primerTopping = document.querySelector(".topping");
console.log(primerTopping);
console.log(primerTopping.style);
/* las propiedades sin guion */
primerTopping.style.backgroundColor = "blue";
primerTopping.style.color = "#ff9090";
primerTopping.style.textTransform = "uppercase";

/* ?ACCEDER AL TEXTO EN EL DOM */

const listDeToppings = document.getElementById("lista-toppings");
console.log(listDeToppings);
/* *innerHTML: nos da la estructura del codigo HTML - String*/
/* *innerText: acceso al texto del elemento sin identacion- String*/
/* textContent: indentacion conservada */
console.log(listDeToppings.innerText);
console.log(listDeToppings.textContent);
console.log(listDeToppings.innerHTML);

/* MODIFICAR EL TEXTO EN EL DOM */
/* ---innerText ara modificar el texto */
const titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.innerText);
titulo.innerText = "Mis Toppings Favoritos";

/* MODIFICAR ATRIBUTOS */
const enlaces = document.getElementsByTagName("a");

console.log(enlaces);
console.log(enlaces[0].getAttribute("href"));
//console.log(enlaces[0].removeAttribute("href"));
console.log(enlaces[0].setAttribute("href", "https://www.freecodecamp.org"));

/* --------------------CLASES CON JS Y EL DOM-------------------- */
/* ACCEDER A CLASES */
const firstTopping = document.querySelector(".topping");
console.log(firstTopping);
// classList: enumera las clases que tiene el elemento en el DOM (DOMTokenList)
console.log(firstTopping.classList);

/* AGREGAR UNA CLASE */
firstTopping.classList.add("texto-verde");

/* VERIFICAR SI UNA CLASE EXISTE */
console.log(firstTopping.classList.contains("topping")); //true
console.log(firstTopping.classList.contains("fondo-azul")); //false

/* ELIMINAR UNA CLASE */
firstTopping.classList.remove("texto-verde");
console.log(firstTopping.classList);

/* -------------OPERACIONES IMPORTANTES EN EL DOM----------- */

/* CREAR UN ELEMENTO */
/* -------1)Crear una REFERENCIA del DOM donde se quiere agregar */
const listaDeToppings = document.getElementById("lista-toppings");

/* -------2)Crear el elemento, se pueden agregar clases,etc. */
const toppingNuevo = document.createElement("li");
toppingNuevo.classList.add("topping", "fondo-marron");
toppingNuevo.innerText = "Queso extra";

/* AGREGAR UN ELEMENTO */
/* -------3)Adicionar un NODO a la referencia (adicionar toppingNuevo a listaDeToppings)*/
listaDeToppings.append(toppingNuevo);

/* REMOVER UN ELEMENTO */
toppingNuevo.remove();
//listDeToppings.remove();

/* --------------------JERARQUIA DEL DOM------------------------ */
/* ---Recorrer el DOM */
const listaDeToppingsRecorrer = document.getElementById("lista-toppings");

/* -------Padres */
console.log(listaDeToppingsRecorrer.parentElement); //se obtiene el HTML del padre
console.log(listaDeToppingsRecorrer.parentNode); //se obtiene el HTML del padre
console.log(listaDeToppingsRecorrer.parentElement.parentElement); //se obtiene el HTML del padre del padre

/* -------hijos nodo y elemento */
console.log(listaDeToppingsRecorrer.children); //se obtiene el HTML de los hijos
console.log(listaDeToppingsRecorrer.firstChild); //se obtiene el primer hijo (trabaja con nodos) (en este caso el resultado sera la indentacion)
console.log(listaDeToppingsRecorrer.children[0]); //se obtiene el HTML del primer hijo (Elemento)
console.log(listaDeToppingsRecorrer.lastChild); //se obtiene el ultimo hijo (trabaja con nodos) (en este caso el resultado sera el salto de linea)
console.log(listaDeToppingsRecorrer.firstElementChild); //se obtiene el primer elemento hijo en HTML
console.log(typeof listaDeToppingsRecorrer.firstElementChild); //objeto de js
console.log(listaDeToppingsRecorrer.lastElementChild); //se obtiene el ultimo elemento hijo en HTML
console.log(listaDeToppingsRecorrer.firstElementChild.firstElementChild);

/* -------hermanos nodo y elemento */
console.log(listaDeToppingsRecorrer.previousElementSibling); //se obtiene el elemento hermano anterior en HTML
console.log(listaDeToppingsRecorrer.nextElementSibling); //se obtiene el elemento hermano siguiente en HTML
console.log(listaDeToppingsRecorrer.nextSibling); //se obtiene el NODO hermano siguiente en HTML (en este caso el salto de linea)
console.log(listaDeToppingsRecorrer.previousSibling); //se obtiene el NODO hermano anterior en HTML (en este caso la indentacion)

/* --------------EVENTOS DEL DOM--------------- */
/* --EVENTOS DEL DOM */
//...Teclado
//...Cursor

/* --CONCEPTOS IMPORTANTES PARA EVENTOS DEL DOM */
//......Elemento "target": el que recibe el evento
//......Trigger: el desencadenante. Ejm: una accion de click
//......Event Handler: funcion que se ejecuta cuando ocurre un evento. Maneja un evento cuando ocurra.
//......Event Listener: "Escucha el evento". Es la asociacion entre el evento en un elemento y la funcion a ejecutar

/* --EVENTOS CON onEvent EN HTML */
/* .....USAR COMILLAS SIMPLES EN EL ARGUMENTO DE ONCLICK
<li onclick="mostrarClic('Aceitunas')" class="topping fondo-marron" id="aceitunas">Aceitunas</li> */

function mostrarClic(topping) {
  console.log(topping);
}

/* --EL METODO .addEventListener() EN JS*/
const albahaca = document.getElementById("albahaca");

function showClic(e) {
  console.log(e);
  console.log(e.target);
  console.log(e.target.innerText);
}
//("evento", funcion)
//albahaca.addEventListener("click", showClic);

//Ejemplo 2 con iteraciones
const toppings = document.getElementsByClassName("topping");
function showClicTopping(e) {
  console.log(e.target.innerText);
}
//por casa topping de la coleccion toppings hacer:
for (const topping of toppings) {
  //console.log(topping);
  topping.addEventListener("click", showClicTopping);
}

//Se puede hacer lo anterior con arrow function
for (const topping of toppings) {
  //console.log(topping);
  topping.addEventListener("click", (e) => {
    console.log(e.target.innerText);
  });
}
