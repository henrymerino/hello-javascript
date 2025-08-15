/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
/*
for (let index = 1; index <= 20; index++) {
    console.log(index)
    
}*/

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma = suma + i;
    console.log("parcial" + i + ":" + suma)
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let index = 1; index <= 50; index++) {

    if (index % 2 == 0) {
        console.log("numero par: " + index);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let myArreglo = ['Angel', 'Jari', 'Liam'];

for (let index = 0; index < myArreglo.length; index++) {
    const element = myArreglo[index];
    console.log(element);

}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let texto = 'MAria';
let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let numVocales = 0;
for (let index = 0; index < texto.length; index++) {
    const element = texto[index];
    for (let index1 = 0; index1 < vocales.length; index1++) {
        const element1 = vocales[index1];
        if (element1 === element) {
            numVocales = numVocales + 1

        }

    }

}

console.log('Numero de vacales:' + numVocales);
console.log('Numero de vacales simplificado:' + texto.match(/[aeiou]/gi).length);


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [1, 2, 3, 4, 5, 6];
let producto = 1;
for (let index = 1; index < numeros.length; index++) {
    const element = numeros[index];
    producto = producto * element
}
console.log("Producto:" + producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let tabla = 5;
for (let index = 1; index <= 12; index++) {
    console.log("cinco por " + index + "= " + index * tabla);

}

// 8. Usa un bucle para invertir una cadena de texto

let cadena = 'marco';
let cadenaInvertida = '';
for (let index = 1; index <= cadena.length; index++) {
    const element = cadena[cadena.length - index];
    cadenaInvertida = cadenaInvertida + element;

}
console.log(cadenaInvertida);


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let num = 10;
let seq = [0, 1]

for (let i = 2; i <= num; i++) {
    seq[i] = seq[i - 1] + seq[i - 2]

}
console.log(seq);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numArray = [5, 8, 11, 12, 7, 3];
let newArray = [];

for (let index = 0; index < numArray.length; index++) {
    const element = numArray[index];
    if (element > 10) {
        newArray.push(element);
    }
}

console.log(newArray);
