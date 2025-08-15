//Map

//Declaracion

myMap = new Map();
console.log(myMap);

//Inicializacion

myMap = new Map([
    ["name", "Brains"],
    ["email", "brains@gmail.com"],
    ["edad", 38]
    ])
console.log(myMap);

//Metodos y propiedades
//set
myMap.set("alias", "mouredev");
myMap.set("name", "Mauro Brains");
console.log(myMap);

//get
console.log(myMap.get("name"));

//has
console.log(myMap.has("name"));
console.log(myMap.has("lastname"));

//delete

myMap.delete("email");
console.log(myMap);

//keys
console.log(myMap.keys());

//values
console.log(myMap.values());

//size
console.log(myMap.size);

//entries
console.log(myMap.entries());

//clear
myMap.clear();
console.log(myMap);

