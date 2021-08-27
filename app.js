                      // Funcion declarada o functionDeclaration

// declaración de la la función
// function suma(){
//   const resultado = 2 + 2;
//   alert(`El resultado es: ${resultado}`);
// };

// ejecución de la función
// suma();


                      // Función Expresada ó FunctionExpression
          
// declaración de la función 
// const suma = function(){
//   const resultado = 3 + 3;
//   alert(`El resultado de esta suma es de: ${resultado}`); 
// }

// ejecucion de la función
// suma();


                      // Funcion Flecha o ArrowFunction

// declaración de la funcion
// const suma = () => {
//   const resultado = 5 + 5;
//   alert(`El resultado de la arrowFunction es de: ${resultado}`);
// };

// // ejecución de la función
// suma();


// const suma = () => {
//   result = 5 + 5;
//   return result;
// }

// const resultado = suma();
// console.log(resultado);


// let num1 = 0;
// let num2 = 0;

// const suma = () => {
//   num1 = Number(prompt('Ingresa el primer número'));
//   num2 = Number(prompt('Ingresa el segundo número'));
//   const result = num1 + num2;
//   return result;
// }

// const resultadoDeLaSuma = suma();

// console.log(`El resultado de la suma es: ${resultadoDeLaSuma}`);

// const multiplicar = () => {
//   return resultadoDeLaSuma * 3;
// }

// const resultadoDeLaMultiplicacion = multiplicar()

// console.log(` El resultado de multiplicar ${resultadoDeLaSuma} * 3 es: ${resultadoDeLaMultiplicacion}`);


// Ejemplo de nombres 

// cual es su nombre, cual es su edad y cual es altura y le vamos a regresar un saludo con las 3 datos


// const pedirDatos = () => {
//   const nombre = prompt('Ingresa tu nombre');
//   const edad = prompt('Ingresa tu edad');
//   const altura = prompt('Ingresa tu altura');
//   const datos = `Hola ${nombre} bienvenid@ a este ejercicio. Tu edad es de: ${edad} años y tienes una altura de: ${altura} cm`;
//   console.log(datos);
//   return datos;
// }

// console.log(pedirDatos());


// const suma = (num1, num2) => {
//   return num1 + num2;
// }

// const suma = (num1, num2) => num1 + num2;


// console.log(suma(3,3)); // 6

// console.log(suma(5,5)); // 10

// console.log(suma(3,6)); // 9

// console.log(suma(23,603)); // 626


// Ejercicios

// sumar(a, b)
// Crear una función sumar que tome como argumentos dos números y devuelva la suma de ellos

// const sumar = (a, b) => a + b;

// console.log(sumar(2, 3)) // 5
// console.log(sumar(1.2, 3.4)) // 4.6
// console.log(sumar(3, -5)) // -2

// restar(a, b)
// Crear una función restar que tome como argumentos dos números y devuelva la resta de ellos

// const restar = (num1, num2) => num1 - num2;

// console.log(restar(3, 2)) // 1
// console.log(restar(10, 5.5)) // 4.5
// console.log(restar(3, 5)) // -2

// % Modulo!!

// num % 2 == 0

// esPar(numero)
// Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es

// TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

// const esPar = (num) => num % 2 === 0;
// const esPar = num => num % 2 === 0;

// console.log(esPar(2));

// console.log(esPar(3));

// esImpar(numero)
// Crear una función esImpar que tome como argumento un número y devuelva true si dicho números es impar o false si no lo es

// TIP: un número es impar si divido por 2 el resto (o módulo) de esa operación no es 0

// const esImpar = num => num % 2 !== 0;

// console.log(esImpar(2));

// console.log(esImpar(3));

// calcularAreaTriangulo(base, altura)
// Crear una función calcularAreaTriangulo que tome como argumentos la base y la altura de un triángulo y devuelva el área del mismo

// calcularAreaTriangulo(3, 4) // 6
// calcularAreaTriangulo(5, 6) // 15

// b * a / 2
  //  3 * 4 = 12, 12 / 2 = 6; 
  // 5 * 6 = 30, 30 / 2 = 15;


  // 1.- Crear la funcion
  // 2.- pasarle argumentos de base y altura
  // 3.- multiplicar la base por la altura
  // 4.- Tomar el resultado y dividirlo entre 2
  // 5.- Retornar ese resultado


  // const calcularAreaTriangulo = (base, altura) => {
  //   const multiplicacion = base * altura;
  //   const resultado = multiplicacion / 2;
  //   return resultado
  // }

  // const calcularAreaTriangulo = (base, altura) => base * altura / 2;



  // console.log(calcularAreaTriangulo(3, 4)) // 6
  // console.log(calcularAreaTriangulo(5, 6)) // 15



//   gritar(str)
// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

// hola = ¡hola!

// 1.- Esccribir la funcion
// 2.- tome un string como argumnento
// 3.- Concatenar el caracter del inicio
// 4.- Concatenar el caracter del final
// 5.- Retornar el string completo


// const gritar = str => {
//   const palabra = '¡' + str + '!';
//   return palabra
// }

// const gritar = str => `¡${str}!`;

// console.log(gritar('hola'))
// console.log(gritar('aaaaaaa'))


// calcularPuntaje(facil, normal, dificil)
// Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:

// facil: 3 puntos
// normal: 5 puntos
// dificil: 10 puntos
              //  x3,x5,x10
// calcularPuntaje(3, 0, 0) // 9
// calcularPuntaje(0, 2, 1) // 20
// calcularPuntaje(5, 1, 2) // 40
                //15+5 +20= 40


  // 1.- Escribir la funcion 
  // 2.- Pasarle los 3 argumentos
  // 3.- el primer argumento se va a multiplicar x 3 // 3 * 3 = 9 // 15
  // 4.- el segundo argumento se va a multiplicar x 5 = 0 // 5
  // 5.- el tercer argumento se va a multiplicar x 10 = 0 // 20 
  // 6.- Se deberían de sumar todos los resultados = 9 // 40
  // 7 .- Retornar el resultado de la suma


// const calcularPuntaje = (num1, num2, num3) => {
//   const result1 = num1 * 3;
//   const result2 = num2 * 5;
//   const result3 = num3 * 10;
//   const resultado = result1 + result2 + result3;
//   return resultado;
// }

// const calcularPuntaje = (num1, num2, num3) => num1 * 3 + num2 * 5 + num3 * 10;


// console.log(calcularPuntaje(3, 0, 0))// 9
// console.log(calcularPuntaje(0, 2, 1))// 20
// console.log(calcularPuntaje(5, 1, 2))// 40
