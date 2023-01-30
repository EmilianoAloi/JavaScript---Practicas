/* 

WHILE: mientras se cumpla la condición indicada, repite
las instrucciones incluidas dentro del bucle.

*/

/*

let x = 0;
while (x <= 10) {
    console.log("Hola mundo " + x);
    x += 1;
}

*/

/*

FOR: (desde; hasta; actualización) {
… lo que se escriba acá se ejecutará mientras dure el
ciclo
}

*/

/*

for (let x = 0; x <= 10; x++) {
    console.log('Ciclo numero ' + x);
}

*/


// --------   EJEMPLO 1   --------------

/*
let contador = 0;

for (let y = 1; y <= 3; y++) {

    let base = parseInt(prompt('Ingrese la base del triangulo:'));
    let altura = parseInt(prompt('Ingrese la altura del triangulo'));
    let superficie = (base * altura) / 2;
    if (superficie > 12) {
        contador++;
    }
    console.log('La base del triangulo ' + y + ' es de ' + base + "cm")
    console.log('La altura del triangulo ' + y + ' es de ' + altura + "cm")
    console.log('La superficie del triangulo ' + y + ' es de ' + superficie + "cm")
    console.log()

}

console.log('La cantidad de triangulos con superficie mayor a 12 es ' + contador);

*/

// --------    EJEMPLO 2   ----------------

/*

let suma = 0;

for (let i = 1; i <= 5; i++) {

let numero = parseInt(prompt('Ingrese un numero'));
suma = suma + numero
}

console.log('La suma es ' + suma);

*/

// ----------- Ejemplo 3 ---------------

/*

multiplo = 5
for (let i = 1; i <= 10; i++) {

    resultado = multiplo * i
    console.log('5 * ' + i + ' es igual a ' + resultado  )
}

*/


// ----------- EJEMPLO 4 ----------

/*
let suma1 = 0;

for (let i = 1; i <= 5; i++) {

    let edad = parseInt(prompt('Ingrese la edad del alumno ' + i + ' turno manana'))
    suma1 = suma1 + edad
}

let promedio1 = suma1 / 5

console.log('El promedio de edad de turno manana es de ' + promedio1 + ' anos')





let suma2 = 0;

for (let i = 1; i <= 5; i++) {

    let edad = parseInt(prompt('Ingrese la edad del alumno ' + i + ' turno manana'))
    suma2 = suma2 + edad
}

let promedio2 = suma2 / 5

console.log('El promedio de edad de turno tarde es de ' + promedio2 + ' anos')




let suma3 = 0;
for (let i = 1; i <= 5; i++) {

    let edad = parseInt(prompt('Ingrese la edad del alumno ' + i + ' turno tarde'))
    suma3 = suma3 + edad

}

let promedio3 = suma3 / 5

console.log('El promedio de edad de turno tarde es de ' + promedio3 + ' anos');

if (promedio1 > promedio2 && promedio1 > promedio3) {
    alert('El turno ma;ana tiene mayor promedio de edad');

} else {

    if (promedio2 > promedio1 && promedio2 > promedio3) {
        alert('El turno tarde tiene mayor promedio de edad')
    } else {

        if (promedio3 > promedio1 && promedio3 > promedio2)
        alert('El turno noche tiene mayor promedio de edad')
    }

}

*/

// ------------- Ejemplo 5 ---------------

/*

let valor = parseInt(prompt('ingrese un numero entre 1 y 5'));

if (valor <= 1 || valor >= 5) {
    alert('Error: Ingreso un numero fuera del rango');
}
switch(valor) {
    case 2:
        alert('Ingreso el numero 2');
        break;
    case 3:
        alert('Ingreso el numero 3');
        break;
    case 4:
        alert('Ingreso el numero 4');
        break

}


*/

//  ------------------ EJEMPLO 6 ----------------

/*

let palabra = prompt('Ingresar alguna de las siguientes palabras: casa, mesa, perro, gato')

if (palabra == 'casa') {
    alert('House');
} else if (palabra == 'mesa') {
    alert('Table');
} else if (palabra == 'perro') {
    alert('Dog')
} else if (palabra == 'gato') {
    alert('Cat')
} else {
    alert('Esa palabra no esta dentro de las opciones')
}

*/

// ---------------- EJEMPLO 7 -----------------
/*

let resultado = 0

for (let i = 1; i <= 10; i++) {

    resultado = i * 9;

    console.log(resultado);

}

*/


// ---------------- EJEMPLO 8 ---------------
/*
let dni = 0
let edad = 0
let sexo = 0
let hombres = 0
let mujeres = 0
let hombresMayores = 0
let personas = 0

dni = parseInt(prompt('Ingrese el DNI de la persona o ingrese 0 para finalizar'));

do {
    if (dni > 0) {
        edad = parseInt(prompt('Ingrese la edad'));
        sexo = prompt('Ingrese el sexo (masculino o femenino)');
        if (sexo == 'masculino') {
            hombres = hombres + 1;
            if (edad >= 16) {
                hombresMayores = hombresMayores + 1
            }
        }
        if (sexo == 'femenino') {
            mujeres = mujeres + 1;
        }
        personas = personas + 1 
    }
    
} while (dni != 0) 

asdjlashdjkshdhasjkdhsahdkasd

*/