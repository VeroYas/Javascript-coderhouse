//comentarios en una linea//

/* comentarios con bloque de codigo
let saludo = "saludo";
    console.log(saludo)*/


    /**
     * VARIABLE = contenedor que almacena datos, los tipos de datos que puede almacenar son varios: numericos,
     * cadena de caracteres (string), arrays, objetos y funciones.
     * Las variables solamente van alojar 1 solo tipo de dato.
     * 
     * SCOPE => se refiere a ambito y hace referencia al contexto en el que la variable va a ser accesible o visible.
     *  Es de donde se va a poder acceder.
     * var => no se recomienda usar, se usaba en versiones antiguas de js. no se usa por el scope que es de tipo global.
     * es decir que se puede acceder a este desde cualquier parte del codigo y esto la vuelve mas dificil de controlar.
     * 
     * palabra clave (var, let o const) seguido de un nombre (tiene que hacer referencia al dato que va alojar) = dato;
     * ejemplo:
     * var numero = 18;
     * 
     */

    /**
     * let => tienen un scope de bloque y solo va a existir dentro del bloque de codigo donde fue declarada.
     *  el dato que se aloja dentro de esta variable puede modificarse.
     * utilizan cameLCase => primera letra de cada palabra en  mayuscula.
     * 
     * cosnt => es una variable de tipo constante que no se va a poder modificar, son valores fijos.
     *  se crean utilizando VEINTE_Y_DOS (utilizan snakeCase) => esto se usa  para diferenciar let y const
     * en nuestro codigo.
     * 
     * En javascript las variables son keysensitive => que javascript dependiendo de como escribamos nosotros
     * la palabra las va a considerar diferentes.
     * let rosa = 8;
     * let ROSA = 9;
     * let Rosa = 5;
     */

    // declarar
    let numero;

    //asignar
    numero = 1;


    // Variables declaradas e inicializada 
    let veinteYUno = 21;
    console.log(veinteYUno);

    veinteYUno = "veinteYUno";
    console.log(veinteYUno)
    /*Las cadenas de caracteres o string se escriben entre:
    "" comillas dobles
    '' comillas simples
    `` alt 96 */




    const VEINTE_Y_DOS = 22;
    console.log(VEINTE_Y_DOS);

    /*VEINTE_Y_DOS = "veinte y dos"; /*DA ERROR EN LA CONSOLA*/
    /*console.log(VEINTE_Y_DOS); /*NO SE PUEDEN MODIFICAR DATOS CONSTANTES*/

    /* console.log(), es una funcion que nos permite imprimir mensajes o valores
    en nuestra consola del navegador*/

    /**
     * OPERADORES
     * + suma 
     * - resta
     * * multiplicacion
     * / division
     * % porcentaje
     */

    let numeroUno = 8;
    let numeroDos = 10;

    let suma = numeroUno + numeroDos;
    console.log(suma);
    console.log("el resultado de la suma es "+ suma);

    let palabraUno = "cinco";
    let palabraDos = "seis";

    let palabras = palabraUno + " "+ palabraDos;
    console.log(palabras);

    /*PROMT => Como sentencia y funcion me permite permitir que el usuario introduzca informacion*/

    let numeroTres = parseInt(prompt("por favor ingresa un nuero"));
    let numeroCuatro = parseInt(prompt("ingresa otro numero"));
    let suma2 = numeroTres + numeroCuatro;
    console.log("el resultado de la suma es" + suma2);