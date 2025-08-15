//1. cree un array que almacene 5 animales

let myAnimal = ["Perro", "Gato", "Loro", "Chivo", "veja"];
//console.log(myAnimal)

//2. Añade 2 mas, uno al inicio y uno al final

myAnimal.unshift("Raton");//al inicio
//console.log(myAnimal)
myAnimal.push("Puerco");//al final
//console.log(myAnimal)

//3. Eliminar el que esta en la tercera posición
//console.log(myAnimal)
myAnimal.splice(2,1);
console.log(myAnimal);

//4.crea un set que almacene cinco libros

let setLibros = new Set();

setLibros = new Set(["Libro1","Libro2","Libro3","Libro4","Libro5"]);
console.log(setLibros);

//5. Añade dos mas uno de ellos repetido

setLibros.add("Libro6");
setLibros.add("Libro2");
console.log(setLibros);

//6. Elimina uno concreto a tu elección

setLibros.delete("Libro3");
console.log(setLibros);

//7. Crea un mapa que asocie el numero de mel mes a su nombre

let myMap = new Map();

myMap = new Map([
[01, "Ana"],
[02, "Maria"],
[03, "Sol"],
[04, "Gaby"],
[05, "Luz"],
[06, "Jari"],
[07, "Liam"],
[08, "Jimena"],
[09, "Julia"],
[10, "Luis"],
[11, "Marcelo"],
[12, "Paul"]
]);

console.log(myMap);

//8. Compruebe que el mes numero 5 existe en el mapa e imprime su valor
for (let item of myMap.keys()) {
    if(item === 05){
        console.log(myMap.get(item));
    }
  }

  if(myMap.has(05)){
    console.log(myMap.get(05));
  }


//9. Añade al mapa una clave con un array como que almacene los meses de verano

let myArray = Array.from(myMap);

console.log(myMap);

//10. Crea un array, transformala a un set y alamacenalo en un Map 
let miArray = [];
myArray = ["Henry", "Jari", "Liam"];
console.log(myArray);

let mySet = new Set(myArray);
console.log(mySet);

let myMap1 = new Map();

myMap1 = [...mySet]
console.log(myMap1);