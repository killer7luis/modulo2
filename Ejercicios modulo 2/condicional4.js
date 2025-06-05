// Pide al usuario un número del 1 al 7 con prompt().
// Usa una estructura switch para mostrar el día de la semana correspondiente (1 para Lunes, 2 para Martes, etc.).

let dia = prompt("Coloque un numero del 1 al 7: ")
let nombredia;

dia = parseFloat(dia)

switch (dia) {
    case 1:
        nombredia = "Lunes"
        break;
    case 2:
        nombredia = "Martes"
        break;
    case 3:
        nombredia = "Miercoles"
        break;
    case 4: 
        nombredia = "Jueves"
        break;
    case 5:
        nombredia = "Viernes"
        break;
    case 6:
        nombredia = "Sabado"
        break;
    case 7:
        nombredia = "Domingo"
        break;
    default:
        nombredia = "Dia invalido";
}
console.log(nombredia);