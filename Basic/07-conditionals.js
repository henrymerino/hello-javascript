// if, else if, else

//if (si)

let age = 37;

if (age == 41) {
    console.log(`Tu edad es ${age}`);
}

//else

if (age == 41) {
    console.log(`Tu edad es ${age}`);
} else {
    console.log(`La edad no es ${age}`);
}

//if else if else

if (age == 41) {
    console.log(`Tu edad es ${age}`);
} else if (age < 18) {
    console.log(`Es menor de edad`);
} else {
    console.log(`La edad no es ${age}`);
}

//operador ternario

const message = age == 41 ? `Tu edad es ${age}` : `La edad no es ${age}`;
console.log(message);

//swith
let day = 1;
let dayName;
switch (day) {
    case 0:
        dayName = "lunes"; 
        break;
    case 1:
        dayName = "martes"; 
        break;
    case 2:
        dayName = "miercoles"; 
        break;
    case 3:
        dayName = "jueves"; 
        break;
    case 4:
        dayName = "viernes"; 
        break;
    case 5:
        dayName = "sabado"; 
        break;
    case 6:
        dayName = "domingo";
        break;
    default:
        dayName = "dia no permitido";
}
console.log(dayName);