/*Ejercicio 5
Crear un programa que pida ingresar 3 numeros, e indique cual es el mayor de todos y cual es el menor*/

let numero1 = Number(prompt("Ingrese el primer numero"));
let numero2 = Number(prompt("Ingrese el segundo numero"));
let numero3 = Number(prompt("Ingrese el tercer numero"));

if (numero1 > numero2 && numero1 >= numero3) {
  alert("el numero mayor es:" + numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
  alert("el numero mayor es:" + numero2);
} else if (numero3 >= numero1 && numero3 >= numero2) {
  alert("el numero mayor es:" + numero3);
}

if (numero1 < numero2 && numero1 <= numero3) {
  alert("el numero menor es:" + numero1);
} else if (numero2 <= numero1 && numero2 <= numero3) {
  alert("el numero menor es:" + numero2);
} else if (numero3 <= numero1 && numero3 <= numero2) {
  alert("el numero menor es:" + numero3);
}
