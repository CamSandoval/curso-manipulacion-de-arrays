//JOIN es un metodo que permite convertir un array en un string, separando cada uno de sus items deacuerdo a lo que se le pase por parametro

const elements =['fire','air','water'];

//ejemplo con for:

let rtaFinal='';
const separator = '--';

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if(index == elements.length -1){
        rtaFinal = rtaFinal +element
    }else{
        rtaFinal = rtaFinal + element + separator;
    }
    
}

console.log('for',rtaFinal);//for fire--air--water

//Uso de join:

const rta = elements.join('--');
console.log('uso de join',rta);//uso de join fire--air--water

//METODO SPLIT, este es un metodo contario a join, ete retorna un array a aprtir de un string, separando los items deacuerdo a lo que se le pase por parametro

const title='Curso-de-arrays';
console.log('uso de split',title.split('-'));//



