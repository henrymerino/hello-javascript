//strings

let myName = "Henry";

//Concatenacion
let greeting = "Hola " + myName + "!";
console.log(greeting); 

console.log(typeof greeting);

//longitud

console.log(greeting.length);

//acceso a la cadena de texto

console.log(greeting[0]);

console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.lastIndexOf("Henry"));
console.log(greeting.includes("Henry"));
console.log(greeting.slice(0, 5));
console.log(greeting.replace("Henry", "Hendry"));

//Template literal (plantillas literales)

let mensaje = `Hola Jari y Liam
son el amor de papá`;

console.log(mensaje);

let email = "h@gmail.com";

console.log(`Hola, ${myName} tu email es ${email}.`);

let e = "Hola";
let f = "hola ";
console.log(e.toUpperCase == f.toUpperCase);
console.log(e == f);