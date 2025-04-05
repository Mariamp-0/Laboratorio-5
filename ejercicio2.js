//Ejercicio #2


//1.

const frutas = ["manzana","banano","uva","pera","sandia","kiwi","naranja"];

console.log("Esta es la lista original de frutas: " + frutas);



//2.

frutas.sort();

console.log("Esta es la lista ordenada de frutas: " + frutas);




//3.

function SingularAPlural(palabra) {
    if (palabra.endsWith("s")) {
        return palabra
    }
    return palabra + "s"
};

console.log("Esta es una fruta en plural: " + SingularAPlural(frutas[5]))



//4.

let frutasPlural = [];

for (let fruta of frutas) {
    frutasPlural.push(SingularAPlural(fruta))
};

console.log("Esta es la lista de frutas en plural: " + frutasPlural);



//5.

function existeFruta(fruta) {
    if (frutas.includes(fruta)){
        return true
    } else {
        return false
    }
};

console.log("¿La fruta mango existe en el arreglo?: " + existeFruta("mango"));
console.log("¿La fruta uva existe en el arreglo?: " + existeFruta("uva"));



//6.

let frutasCortas = [];

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].length <= 4)
        frutasCortas.push(frutas[i])

};

console.log("Las frutas con 4 letras o menos son: " + frutasCortas);



//7.

function eliminarFruta(fruta) {

    if (frutas.includes(fruta)){
        let indiceFruta = frutas.indexOf(fruta)
        frutas.splice(indiceFruta,1)
        console.log("La nueva lista con la fruta eliminada es: " + frutas)
    } else {
        return false
    }

};

console.log(eliminarFruta("manzana"))
