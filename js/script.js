let botonIniciar = document.querySelector("#boton-iniciar");
let agregarPalabra = document.querySelector("#agregar-palabra");
let guardar = document.querySelector("#guardar");
let cancelar = document.querySelector("#cancelar");
let nuevoJuego = document.querySelector("#nuevo-juego");
let desistir = document.querySelector("#desistir");
let inicio = document.querySelector("#inicio");
let aPalabra = document.querySelector("#a-palabra");
let juego = document.querySelector("#juego");
let listaDePalabras = ["ORACLE", "ALURA", "LATAM", "AHORCADO", "HTML", "JAVASCRIPT", "CSS", "GITHUB"];
let palabra = document.querySelector("#palabra");
let tablero = document.querySelector("canvas");
let pincel = ahorcado.getContext("2d");
let contador = 0;

pincel.lineWidth = 3;
pincel.strokeStyle = "black";
pincel.beginPath();
pincel.moveTo(150, 300);
pincel.lineTo(250, 300);
pincel.lineTo(200, 285);
pincel.lineTo(150, 300);
pincel.stroke();

window.addEventListener("keydown", (element) => {
    if (contador == 0) {
        pincel.moveTo(200, 285);
        pincel.lineTo(200, 100);
        pincel.stroke();
        contador++;
    } else if(contador == 1) {
        pincel.lineTo(300, 100);
        pincel.stroke();
        contador++;
    } else if(contador == 2) {
        pincel.lineTo(300, 120);
        pincel.stroke();
        contador++;
    } else if(contador == 3) {
        pincel.beginPath();
        pincel.arc(300, 140, 20, 0, 2*Math.PI);
        pincel.stroke();
        contador++;
    } else if(contador == 4) {
        pincel.beginPath();
        pincel.moveTo(300, 160);
        pincel.lineTo(300, 240);
        pincel.stroke();
        contador++;
    } else if(contador == 5) {
        pincel.lineTo(270, 270);
        pincel.stroke();
        contador++;
    } else if(contador == 6) {
        pincel.moveTo(300, 240);
        pincel.lineTo(330, 270);
        pincel.stroke();
        contador++;
    } else if(contador == 7) {
        pincel.moveTo(300, 180);
        pincel.lineTo(270, 210);
        pincel.stroke();
        contador++;
    } else if(contador == 8) {
        pincel.moveTo(300, 180);
        pincel.lineTo(330, 210);
        pincel.stroke();
        contador++;
    } else if(contador > 8) {
        alert("Perdiste");
        contador = 0;
    }
});

botonIniciar.addEventListener("click", ()=>{
    inicio.classList.add("invisible");
    juego.classList.remove("invisible");
});

agregarPalabra.addEventListener("click", ()=>{
    inicio.classList.add("invisible");
    aPalabra.classList.remove("invisible");
});

guardar.addEventListener("click", ()=>{
    listaDePalabras.push(palabra.value.toUpperCase());
    aPalabra.classList.add("invisible");
    juego.classList.remove("invisible");
    console.log(listaDePalabras);
});

cancelar.addEventListener("click", ()=>{
    aPalabra.classList.add("invisible");
    inicio.classList.remove("invisible");
});

desistir.addEventListener("click", ()=>{
    juego.classList.add("invisible");
    inicio.classList.remove("invisible");
});