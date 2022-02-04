function dibujarGanador() {
    pincel.beginPath();
    pincel.fillStyle = "green";
    pincel.font = "bold 40px 'Inter'";
    pincel.fillText("Felicidades,", 405, 100);
    pincel.fillText("Ganaste!", 405, 150);
}

function dibujarPerdedor() {
    pincel.beginPath();
    pincel.fillStyle = "red";
    pincel.font = "bold 40px 'Inter'";
    pincel.fillText("Fin del juego!", 405, 100);
}