// 1. Escribe un comentario en una linea

// Hola este es un comentario en una linea

// 2. Escribe un comentario en varias lineas

/*
Este es un comentario
en varias
lineas
*/

// 3. Declara variables con valores asociados a todos los datos de un tipo primitivo

let myString = "variable string";

let myNumero = 15;

let mySymbol = Symbol("mi simbolo");

let myBigInt = BigInt(4646468468465153);

let undefined;

let myNull = null;

let myBoolean = true;

// 4. Imprime por consola el valor de todas las variables creadas

console.log(myString);
console.log(myNumero);
console.log(mySymbol);
console.log(myBigInt);
console.log(undefined);
console.log(myNull);
console.log(myBoolean);

// 5. Imprime por consola el tipo de todas las variables
console.log("------------------");

console.log(typeof myString);
console.log(typeof myNumero);
console.log(typeof mySymbol);
console.log(typeof myBigInt);
console.log(typeof undefined);
console.log(typeof myNull);
console.log(typeof myBoolean);

// 6. A continuación, modifica los valores de las variables por otras del mismo tipo
console.log("------------------");

myString = "Barato";
myNumero = 11;
mySymbol = Symbol("juan");
myBigInt = 1225464687;
myBoolean = false;

// 7. A continuación, modifica los valores de las variables por otros distintos tipos
console.log("------------------");

myString = 15;
myNumero = "11";
mySymbol = "juan";
myBigInt = "1225464687";
myBoolean = Symbol("false");

// 8. Declara constantes con los valores asociados a todos los tipos de datos primitivos

console.log("------------------");

const myConstString = "variable string";

const myConstNumero = 15;

const myConstSymbol = Symbol("mi simbolo");

const myConstBigInt = BigInt(4646468468465153);

const myConstNull = null;

const myConstBoolean = true;

//const undefinedConst;

// 9. A constinuación, modifica los valores de las constantes 

//myConstString = "variable string 1";

//myConstNumero = 16;

//myConstSymbol = Symbol("mi simbolo 1");

//myConstBigInt = BigInt(46464684684651537777);

//myConstNull = 1;

//myConstBoolean = false;

