// promedio nota

//array de objetos

const notas = [

    {
        curso: "Fisica",
        nota: 6,
        credito: 3,
    },

    {
        curso: "Matematica",
        nota: 8,
        credito: 5,

    },

    {
        curso: "Programacion",
        nota: 7,
        credito: 4,

    },

];

const notasYcreditos = notas.map(function(notaObjeto) { // recorre y selecciona lo que deja un cod mas limpio (map)
    return notaObjeto.nota * notaObjeto.credito;
});

const sumaDeNotasYcreditos = notasYcreditos.reduce(
    function(sum = 0, newVal) { //debemos inicializar con 0
        return sum + newVal;
    }
);

const creditos = notas.map(function(notaObjeto) {
    return notaObjeto.credito;
});

const sumaDeCreditos = creditos.reduce(
    function(sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioDeNotasYcreditos = sumaDeNotasYcreditos / sumaDeCreditos;

//  Recuerda que la función reduce recibe una función con dos parámetros: el valor acumulado (que para evitar errores debemos inicializar con 0) y el nuevo elemento de los arrays.
/*El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10*/