//MAP es un metodo inmutable que lo que hace es realizar una transformación a cada uno de los items de un array,
    //Aunque comparte similitudes con foreach en cunato a recorer el array, map es usado exclusivamente para transformaciones


const letters = ['a','b','c','d'];

//Su funcion es basicamente generar un ciclo que hara lo que se le pida pero con cada una de las partes del array
const lettersModify = []
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    lettersModify.push(element + '++');
    
}

const newArray = letters.map(item => item + '++');
const newArrForEach = letters.forEach(item => item + '++');

console.log('original', letters);//original [ 'a', 'b', 'c', 'd' ]
console.log('new', newArray);//new [ 'a++', 'b++', 'c++', 'd++' ]
console.log('new with forEach', newArrForEach);//new with forEach undefined