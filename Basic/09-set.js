//set

//Declaracion
let mySet = new Set();

mySet = new Set(["Baris", "Moure", "moureDev", 37, true]);
console.log(mySet);

//Metodos comunes

//add y delete

mySet.add(34);
console.log(mySet);

console.log(mySet.delete(37));//retorna un boolean tru o false si lo elimino
console.log(mySet);

//has
console.log(mySet.has("Moure"));
console.log(mySet.has("Henry"));

//size
console.log(mySet.size);

//converir set a array
let myArray = Array.from(mySet);
console.log(myArray);

//convertit array a set

mySet = new Set(myArray);
console.log(mySet);

//set No admite duplicados, es sensible a cambios
mySet.add(37);
mySet.add(37);
console.log(mySet);