/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a = 0, b = 0) {
    return a + b;
}

console.log(suma(1, 2));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function mayorNumeroArray(myArray) {
    let mayor = myArray[0];
    myArray.forEach(function (value) {
        if (value > mayor) {
            mayor = value;
        }
    });

    return mayor;
}


console.log(mayorNumeroArray([5, 2, 3]))



// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function numeroVocalesCadena(texto) {
    return texto.match(/[aeiou]/gi).length;
}

console.log(numeroVocalesCadena('aeIOU'));



// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let mayusArray = [];
function mayusculasArray(myArray) {
    for (let index = 0; index < myArray.length; index++) {
        mayusArray.push(myArray[index].toUpperCase());
    }

    return mayusArray;
}

console.log(mayusculasArray(["Jari", "Liam", "Gaby"]));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function numeroPrimo(numero){
    if(numero < 2) {
        return false;
    }

    for (let index = 2; index <= Math.sqrt(numero); index++) {
      if(numero % index === 0){
        return false;
      }       
    }
    return true;
}

console.log(numeroPrimo(10));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado