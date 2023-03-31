//Concat es un maetod que retorna unarray concatenado o unido con lo que se le pase por parametro

const elements = [1,1,2,2];
const otherElements=[3,3,4,4];


//Ejemplo con for
const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element)
}

console.log('for = ',newArray);//for =  [ 1, 1, 2, 2, 3, 3, 4, 4 ]

//Ejemplo con concat

const rta= elements.concat(otherElements);
console.log('uso de concat = ',rta);//uso de concat =  [ 1, 1, 2, 2, 3, 3, 4, 4 ]

//Otras formas de concatenacion de arrays

let random = 'random';
const rta2 = [...elements,...otherElements];

console.log('Concatenación con spread oparator =', rta2);//Concatenación con spread oparator = [ 1, 1, 2, 2, 3, 3, 4, 4 ]

const rta3 =[...elements,random];
console.log('Spread con strings = ',rta3);//Spread con strings =  [ 1, 1, 2, 2, 'random' ]

//Hay que tener cuidado con el spread operator, ya que este tambien puede separar strings y generar errores

console.log('Errores con spread= ', [...elements,...random]);//Errores con spread=  [ 1, 1, 2, 2, 'r', 'a', 'n', 'd', 'o', 'm' ]