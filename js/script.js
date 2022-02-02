let botonIniciar = document.querySelector("#boton-iniciar");
let agregarPalabra = document.querySelector("#agregar-palabra");
let guardar = document.querySelector("#guardar");
let cancelar = document.querySelector("#cancelar");
let nuevoJuego = document.querySelector("#nuevo-juego");
let desistir = document.querySelector("#desistir");
let inicio = document.querySelector("#inicio");
let aPalabra = document.querySelector("#a-palabra");
let juego = document.querySelector("#juego");
let listaDePalabras = [
  "ORACLE",
  "ALURA",
  "LATAM",
  "AHORCADO",
  "HTML",
  "CSS",
  "GITHUB",
];
let palabra = document.querySelector("#palabra");
let tablero = document.querySelector("canvas");
let pincel = ahorcado.getContext("2d");
let contador = 0;
let flag = false;
let palabraJuego;
let contadorLetraError = 0;

botonIniciar.addEventListener("click", () => {
  inicio.classList.add("invisible");
  juego.classList.remove("invisible");
  empezarJuego();
  flag = true;
});

agregarPalabra.addEventListener("click", () => {
  inicio.classList.add("invisible");
  aPalabra.classList.remove("invisible");
  flag = false;
});

guardar.addEventListener("click", () => {
  listaDePalabras.push(palabra.value.toUpperCase());
  aPalabra.classList.add("invisible");
  juego.classList.remove("invisible");
  empezarJuego();
  flag = true;
});

cancelar.addEventListener("click", () => {
  aPalabra.classList.add("invisible");
  inicio.classList.remove("invisible");
  flag = false;
});

desistir.addEventListener("click", () => {
  juego.classList.add("invisible");
  inicio.classList.remove("invisible");
  flag = false;
});

nuevoJuego.addEventListener("click", () => {
  empezarJuego();
  flag = true;
});

window.addEventListener("keydown", (element) => {
  if (flag) {
    console.log(palabraJuego);
    if(!dibujarLetra(element.key.toUpperCase())){
        crearMuneco(contador);
        contador++;
    }
  }
});
