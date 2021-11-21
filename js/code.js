window.onload = function() {
    alert("Hello World");
    fondo();
    getRndInteger();
    console.log(getListRandom(10, 1, 10));
}

function fondo() {
    fecha = new Date();
    hora = fecha.getHours();
    if (hora < 7 || hora > 17) {
        document.getElementById("fondo").style.backgroundColor = "black";
        document.getElementById("titulo").innerHTML = "BUENAS NOCHES";
        document.getElementById("titulo").style.color = "white";
    } else {
        document.getElementById("fondo").style.backgroundColor = "white";
        document.getElementById("titulo").innerHTML = "BUENOS DIAS";
        document.getElementById("titulo").style.color = "black";
    }
}

function getListRandom(n, min, max) {
    getRndInteger();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buttonOpacity() {
    if (opacity == 0.5) {
        document.getElementsByClassName("card").style.opacity = "1";
    } else {
        document.getElementsByClassName("card").style.opacity = "0.5";
    }
}

function listRandom() {
    buttonOpacity();
    galleryRandom();
}