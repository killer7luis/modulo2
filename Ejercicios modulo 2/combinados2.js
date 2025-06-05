// Pide al usuario un nombre y una edad con prompt().
// Si el nombre es "Ana" Y la edad es mayor a 20, muestra "Bienvenida Ana". 
//Si solo el nombre es "Ana" pero la edad no cumple, muestra "Hola Ana, pero no cumples la edad". 
//Si el nombre no es "Ana", muestra "Usuario no reconocido".

let nombre = prompt("Coloque su nombre: ")

let edad = prompt("Coloque su edad: ")

if (nombre == "Ana" && edad >= 20) {
    console.log("Bienvenida Ana.")
} else if (nombre == "Ana" && edad < 20) {
    console.log("Bienvenida Ana, no cumples la edad")
} else {
    console.log("Usuario no reconocido")
}