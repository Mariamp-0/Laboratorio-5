//Ejercicio #1

const opciones =["PIEDRA","PAPEL","TIJERA"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let computadora = opciones[getRandomInt(3)];
let salir = "N";

do {
    let opcion = prompt("Elige una opción: piedra, papel o tijera");

    opcion = opcion.toUpperCase();

    console.log("La elección del usuario es: " + opcion);

    console.log("La elección de la computadora es: " + computadora);
    
    if (computadora == opcion) {
        console.log("¡ESTAMOS EMPATADOS!")
    } else if (computadora == "TIJERA" && opcion == "PIEDRA") {
        console.log("¡FELICIDADES...GANASTE!")
        
    } else if (computadora == "PIEDRA" && opcion == "PAPEL") {
        console.log("¡FELICIDADES...GANASTE!")

    } else if (computadora == "PAPEL" && opcion == "TIJERA") {
        console.log("¡FELICIDADES...GANASTE!")
    } else {
        console.log("LO SIENTO...PERDISTE")
    }

    salir = prompt("¿Deseas jugar de nuevo? Elija 'S' para seguir o 'N' para salir del programa")
      
} while (salir != "N");

console.log("Gracias por jugar")
