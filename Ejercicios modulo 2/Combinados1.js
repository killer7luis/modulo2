// Pide al usuario dos números y luego un operador (+, -, *, /) usando prompt().
// Realiza la operación correspondiente y muestra el resultado. Usa condicionales para el operador.

let numer1 = prompt("Coloque su primer numero: ")

let numer2 = prompt("Coloque su segundo numero: ")

let operador = prompt("Coloque su tipo de operacion (SUMA, RESTA, MULTIPLICACION, DIVISION): ")

numer1 = parseFloat(numer1)
numer2 = parseFloat(numer2)

let suma = numer1 + numer2

let resta = numer1 - numer2

let multi = numer1 * numer2

let divi = numer1 / numer2


if (operador == "SUMA") {
    console.log(suma)
} else if (operador == "RESTA") {
    console.log(resta)
} else if (operador == "MULTIPLICACION") {
    console.log(multi)
} else if (operador == "DIVISION") {
    console.log(divi)
} else {
    console.log("???")
}