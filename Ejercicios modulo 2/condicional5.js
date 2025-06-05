// Pide una calificación numérica (0-10) con prompt(). Si la calificación es 7 o más, muestra "Aprobado". Si es menor, muestra "Reprobado".

let numero = prompt("Coloque un numero del 1 al 10: ")

if (numero >= 7) {
    console.log("Aprobado")
} else if (numero < 7) {
    console.log("Reprobado")
} else {
    console.log("Eso no es un numero")
}