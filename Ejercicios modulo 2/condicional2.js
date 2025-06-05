// Pide un número al usuario con prompt(). Usa if-else if-else para determinar si el número es positivo, negativo o cero, y muestra el resultado.

let numero = prompt("Por favor coloque un numero: ")

if (numero == 0) {
    console.log("Es un cero");
} else if (numero > 0) {
    console.log("Es positivo");
} else if (numero < 0) {
    console.log("Es negativo");
} else {
    console.log("Eso no es un numero");
}