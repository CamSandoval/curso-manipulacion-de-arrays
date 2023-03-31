//Includes es un metodo que retornara un booleano  deacuerdo a si alguno de los elementos de array contiene o lo que se le pase por parametro

const pets =['cat','dog','bat'];


//Ejemplo con for
let includesArray= false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog'){
        includesArray = true;
        break;
    }
    
};

console.log('for',includesArray);//for true

const rta = pets.includes('dog');
console.log('uso de includes', rta);//uso de includes true