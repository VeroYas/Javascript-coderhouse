/**
 * CICLO POR CONTEO
 * - sabemos cuantas veces necesitamos que itere el codigo
 * - usa algo llamado contador
 * - es el ciclo for
 * 
 * CICLO POR CONDICION
 * - No sabemos cuantas veces se va a repetir, pero sabemos que
 * si se cumple una condicion x frena.
 * - los ejemplos de los ciclos condicionales son el while y el do wile.
 */


/**
 * CICLO POR CONTEO
 * operadores importantes => incremento / decremento
 * cuando queremos incrementar algo => i++ => i+1
 * cuando queremos decrementar algo => i-- => i-1
 */

// i++ => post incremento el valor de la variable se va a
//incrementar despues que se  utilice la expresion actual
/*let x = 5;
let y = x++;
console.log(y);
console.log(x);*/

//++i => pre-incremeto el valor de la variable incrementa
//antes de que se utilice.

/*let a = 7;
let b = ++a;
console.log(b);*/

/** CICLO FOR
 * Ciclo por conteo, posee 3 partes:
 *  inicializacion (desde): la variable de control inicial, se expresa con una variable
 *  condicion (hasta): se verifica antes de cada iteracion, si a condicion es verdadera
 *      el ciclo continua, si es falsa termina.
 *  actualizacion: es la parte donde se genera el incremento o decremento de la variable.
 * 
 * for(inicializacion ; condicion ; actualizacion){
 * bloque de codigo a repetir
 * }
 */

// vamos a imprimir 10 veces un mensaje

/*for(let i =1; i <= 10; i++){
    console.log("Se imprime el mensaje", i);
}*/

//Tabla de multiplicar del 5
/*let tablaDelCinco = 5;
for(let i = 1 ; i<=10 ; i++){
    
    let resultado = tablaDelCinco * i;
    console.log(tablaDelCinco + "x" + i + "= " + resultado);
}*/

// sentencia continue salta de una iteracion y continua a la siguiente
/*for(let i=1 ; i<=5 ; i++){
    if (i===3){
        continue;
    }
    console.log(i)
}*/

// sentencia break frena el bucle y sale
/*for(let i=1 ; i<=5 ; i++){
    if (i===3){
        break;
    }
    console.log(i)
}*/

/**CONDICION WHILE
 * Es una estructura de control que va a repetir un conjunto de instruccioes
 * mientras se cumpla una condicion especifica
 * 
 * while(condicion){
 *      bloque de codigo a ejecutar
 * }
 */
//EJEMPLO
/*let contador = 1;
while(contador<=10){
    console.log("numero: " + contador);
    contador++
}*/

/**
 * DO..WHILE
 * se utiliza para ejecutar un bloque de codigo, al menos una vez y luego
 * repetirlo mientras se cumpla la condicion especifica.
 * 
 * do{
 *      bloque de codigo a ejecutar
 * 
 * }while(condicion)
 */
//EJEMPLO
let clave;

let intentos = 0;
const MAX_INTENTOS = 3;

    do{
        clave = prompt('ingresa la contrasena');
        intentos ++;

        if (clave === 'clave123'){
            console.log("contrasena correcta")
            break;// si el usuario pone la contrasena correcta se corta el bucle
        }

        if (intentos >= MAX_INTENTOS){
            console.log("la cantidad de intentos se alcanzo")
            break;
        }

    }while(true);