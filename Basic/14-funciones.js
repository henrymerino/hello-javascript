//funciones

//Simples
function myFunc(){
    console.log("Hola soy una funcion");
}

for (let index = 0; index < 5; index++) {
    myFunc();
    
}

//Con parametros
function myFuncWithParam(name){
 console.log(`Hola ${name}`)
}

myFuncWithParam("Brains");

//funciones anonimas

const myFunc2 = function(name){
    console.log(`Hola ${name}`);
}

myFunc2("Hola henry");

//Arrow function

const myFunc3 = (name) =>{
    console.log(`Hola ${name}`);
}

myFunc3("Pedro");

const myFunc4 = (name) => console.log(`Hola ${name}`);
myFunc4("Pedrito");

//Parametros

function sum(a,b){
    console.log(a+b);
}

sum(5,10);

function defaultSum(a=0,b=0){
    console.log(a+b);
}
defaultSum(5);
defaultSum(b=10);

//retorno de valores

function mult(a,b){
    return a*b;
}

let result = mult(7,3)
console.log(result);


//funciones anidadas

function externa(){
    console.log("Funcion extrerna");

    function interna(){
        console.log("Funcion interna");
    }

    interna();
}

externa();

//funciones de orden superior

function ordenSuperior(func, param){
    func(param);
}

ordenSuperior(myFunc4, "Hola funcion de orden superior");



//forEach


myArray = [1,2,3,4];

myArray.forEach(function (value){
console.log(value)
});

myArray.forEach((value) => console.log(value));


mySet = new Set(["Baris", "Moure", "moureDev", 37, true]);
mySet.forEach((value) => console.log(value));

myMap = new Map([
    ["name", "Brains"],
    ["email", "brains@gmail.com"],
    ["edad", 38]
    ]);
    myMap.forEach((value) => console.log(value));