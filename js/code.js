//EJERCICIO 2

function saludo() {
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

//EJERCICIO 3

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getListRandom(n, min, max) {
    var array = [];
    for (let i = 0; i < n; i++) {
        var random = getRndInteger(min, max);
        if (array.includes(random)) {
            i--;
        } else {
            array.push(random);
        }
    }
    return array;
}

window.onload = function() {
    alert("Hello World");
    saludo();
    console.log(getListRandom(16, 1, 16));
}

//EJERCICIO 4

function buttonOpacity() {
    let boton = document.getElementById("button");
    const button = document.querySelector("#button");
    const opacidad = getComputedStyle(button);

    if (opacidad.opacity == 0.5) {
        boton.style.opacity = "1";
    } else {
        boton.style.opacity = "0.5";
    }
}

//EJERCICIO 5

function galleryRandom(){
    let min = 1000;
    let max = 0;
    let imagenes = document.getElementsByTagName("img");
    for (let i = 0; i < 16; i++) {
        let aux = imagenes[i].getAttribute("src");
        aux = aux.split("_").pop();
        aux = aux.split(".").shift();
        aux = parseInt(aux, 16);

        if (aux > max) {
            max = aux;
        }

        if (aux < min) {
            min = aux;
        }
    }

    let images = document.getElementsByClassName("img");
    let listRnd = getListRandom(16, min, max);

    for (let i = 0; i < 16; i++) {
        images[i].setAttribute("src", "./img/IMG_" + listRnd[i] + ".PNG");
    }
}

function listRandom() {
    buttonOpacity();
    galleryRandom();
}
