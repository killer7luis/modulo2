// Define una palabra secreta (ej: "javascript"). Pide al usuario que ingrese palabras con prompt()
// dentro de un bucle while hasta que adivine la palabra secreta. Muestra un mensaje de felicitación al final.

colocar = "nah"

clave = "javascript"

while (colocar != clave) {
    colocar = prompt("Coloque la palabra secreta: ")
} if (colocar = clave) {
    console.log("Felicidades!")
}