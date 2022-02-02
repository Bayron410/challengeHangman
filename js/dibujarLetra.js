function dibujarLetra(letra) {
    let indicador = 0;
    for(let i = 0; i < palabraJuego.length; i++) {
        if(letra == palabraJuego[i]) {
            pincel.beginPath();
            pincel.fillStyle = "#0A3871";
            pincel.font = "bold 50px 'Inter'";
            pincel.fillText(letra, (305 + (60 * i)), 290);
            indicador++;
        }
    }
    if(indicador == 0) {
        pincel.beginPath();
        pincel.fillStyle = "#0A3871";
        pincel.font = "regular 30px 'Inter'";
        pincel.fillText(letra, (305 + (40 * contadorLetraError)), 390);
        contadorLetraError++;
        return false;
    } else {
        return true;
    }
}