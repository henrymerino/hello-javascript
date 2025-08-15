//array
//Declaracion
let myArray = [];

let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

//Inicializacion
myArray = [1,2,3];
myArray2 = new Array(1); 

console.log(myArray);
console.log(myArray2);

myArray = [1,"Henry",true];
myArray2 = new Array(2);
myArray2[0] = 1;
myArray2[1] = "Juan";
console.log(myArray);
console.log(myArray2);

//Metodos comunes

myArray = [];

//push y pop

myArray.push("Henry");
myArray.push("Jari");
myArray.push("Liam");
myArray.push(37);

console.log(myArray);

let elementoEliminado = myArray.pop();//elimina el ultimo elemento del array y lo devuelve
console.log(elementoEliminado);
console.log(myArray);

elementoEliminado = myArray.shift();
console.log(elementoEliminado);
console.log(myArray);

elementoEliminado = myArray.unshift("Jordan", "Dana");
console.log(elementoEliminado);
console.log(myArray);

//length
console.log(myArray.length);

//clear
//myArray = [];
//myArray.length = 0; alternativa poco recomendada

//slice
elementoEliminado = myArray.slice(1,2);//retorna un sub conjunto solo con el o los elementos del rango
console.log(elementoEliminado)

//splice
elementoEliminado = myArray.splice(0,3);
console.log(elementoEliminado);

elementoEliminado = myArray.splice(0,3, "Datos entrada");
console.log(elementoEliminado);