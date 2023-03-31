//Flat es un metodo que sirve para insertar o descomponer un array que dentro de  si mismo tenga mas arrays y convertirlos todos a su mismo nivel

const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

//ejemplo con for

let newArray=[];

for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        newArray.push(element);
    }
    
}

console.log('Usando for',newArray);//[ 1, 2, 3, 4, 5, 6, [ 1, 2, [ 1, 2 ] ], 7, 8, 9 ]

//Como podemos ver en el for, es algo complejo revisar si cada array la rofundidad que este pueda tener, por lo cual podemos usar flat

const useFlat= matriz.flat();

console.log('Usando flat',useFlat);//Usando flat [ 1, 2, 3, 4, 5, 6, [ 1, 2, [ 1, 2 ] ], 7, 8, 9 ]

//Pdemos ver que tambien tenememos el mismo error, y esto es debido a que flar no sabe de la profundidad que pueda llegar a tener el array, asi que debemos de pasarle por parametro la profundidad

const useDepthFalt = matriz.flat(3);
console.log('Pasandole la profuncfidad a flat',useDepthFalt);/*Pasandole la profuncfidad a flat [
    1, 2, 3, 4, 5, 6,
    1, 2, 1, 2, 7, 8,
    9
]*/