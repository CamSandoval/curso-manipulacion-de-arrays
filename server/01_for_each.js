// FOREACH: Es un metodo de manipulación de arrays que nos permite recorrer cada uno de los elementos de este de una manera mas sencilla y con una sintaxis mas limpia

const letters= ['a','b','c'];

//Su funcion es basicamente generar un ciclo que hara lo que se le pida pero con cada una de las partes del array
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for : ',element);//for:  a for:  b for:  c
}

//FOREACH
    // item es una  palabra de identificacion, puede ser cambiada por cualquer otras
letters.forEach(item => {
    console.log('foreach :',item);//foreach: a  foreach: b  foreach: c
})

