//operadores aritmeticos

let a = 5;
let b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
a++
console.log(a);
b--
console.log(b);

++a
console.log(a);
--b
console.log(b);

console.log("-------------------------");
//Operadores de asignación
let myVariable = 2;
console.log(myVariable);
myVariable +=2;
console.log(myVariable);
myVariable -=2;
console.log(myVariable);
myVariable *=2;
console.log(myVariable);
myVariable /=2;
console.log(myVariable);
myVariable %=2;
console.log(myVariable);
myVariable **=2;
console.log(myVariable);

console.log("-------------------------");
console.log(a);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a == 7);//igualdad por valor
console.log(a == "7");//igualdad por valor
console.log(a === b);
console.log(a === a);//igualdad por identidad (por tipo y valor)
console.log(a === 7);
console.log(a === "7");

console.log(a != 7);
console.log(a !== '6');

//opradores logicos

console.log("-------------------------");
//and (&&)
console.log(5 > 10 && 15 > 20 );
console.log(5 < 10 && 15 < 20 );

//or (||)
console.log(5 > 10 || 15 > 20 );
console.log(5 > 10 || 15 < 20 );

//not (!)
console.log(!(5 > 10 || 15 > 20) );
console.log(!(5 > 10 || 15 < 20));

//opradores ternarios

console.log("-------------------------");

const isRaining = true;

isRaining ? console.log('Esta llovinedo'): console.log('No esta llovinedo');