//Pide al usuario dos números usando prompt(). Conviértelos a tipo numérico y muestra la suma en la consola o en un alert.

let numero1 = prompt("Coloque un numero: ")

let numero2 = prompt("Coloque otro numero: ")

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)

let suma = numero1 + numero2

console.log("El resultado es " + suma)