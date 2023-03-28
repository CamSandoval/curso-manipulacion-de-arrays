//Filter en un metodo inmutable que permite, como su mismo nombre lo dice crear un flittro que evalue bajo alguna condicion cada uno de los items de un array

const words =['spray','limit','elite','exuberant'];

const newArray =[];

//Aca podemos obsevar el comportamiento de lo que hace un metodo filter
for (let i = 0; i< words.length; i++){
    const item = words[i];
    if(item.length >= 6){
        newArray.push(item);
    }
};

console.log('original',words);//original [ 'spray', 'limit', 'elite', 'exuberant' ]
console.log('new Array', newArray);//new Array [ 'exuberant' ]

//Uso de filter
const rta = words.filter(item => item.length >= 6);

console.log('original',words);//original [ 'spray', 'limit', 'elite', 'exuberant' ]
console.log('filter', rta);//filter [ 'exuberant' ]