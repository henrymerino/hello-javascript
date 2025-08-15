//Bucles

// for

for (let index = 0; index < 5; index++) {
    console.log(`Hola  ${index}`);
}

const numeros = [1, 2, 3, 4, 5];

for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    console.log("Numero " + element);

}

let i = 0;
// while
while (i < 5) {
    console.log("Numero " + i);
    i++;
}

//do while

let j = 6
do {
    console.log("Hola " + j);
    j++;
} while (j < 5);

myArray = [1, 2, 3, 4];

mySet = new Set(["Birain", "Hnery", "LUcas", 37, true]);

myMap = new Map([
    ["name", "Brains"],
    ["email", "brains@gmail.com"],
    ["edad", 38]
]);

myString = "Mi nombre es";

for (const iterator of myArray) {
    console.log(iterator);
}


for (const iterator of mySet) {
    console.log(iterator);
}

for (let iterator of myMap) {
    console.log(iterator);
}


for (let iterator of myString) {
    console.log(iterator);
}

//Buenas practicas

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        continue;
    }else if(index == 6){
        break;
    }
    console.log("numeros:" + index);


}