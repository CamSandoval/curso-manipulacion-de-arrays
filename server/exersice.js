const letters= ['a','b','c'];

//Foreach es un metodo usado para recorer un array y poder usar sus elementos como partes de un algoritmo
letters.forEach(item => console.log(`${item} es parte de letters`));/*OUTPUT=a es parte de letters
b es parte de letters
c es parte de letters*/

const orders = [
    {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
    },
    {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    },
    {
    customerName: "Santiago",
    total: 180,
    delivered: true,
    },
    {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    },
    {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    },
];

//Map es un metodo que devuelve un araray con cada uno de sus elementos modificados bajo algun alagoritmo que se le pase

console.log(orders.map(item=>item.delivered));//OUTPUT=[[ true, false, true, true, false ]]

//Uso de filter y reduce para encontar los clientes a los cuales se les haya entregado su pedido

//filter es un metodo que devuelve un array con todos los metodos que cumplan co una concidion
//reduce es un metodo que comprime un array a cualquier cosa que nesesitemos de acuerdo a nuestro algoritmo, recibe dos parametros, uno es la funcion la cual hara lo que deseemos deacuerdo a lo que recibe y el segundo es lo que queremos que retorne

console.log(orders.filter(item=>item.delivered)
.reduce((acum,item)=>{
    if(!acum[item.customerName]){
        acum[item.customerName]= 'delivered';
    }
    return acum
},{}));/*OUTPUT={ Nicolas: 'delivered',
Santiago: 'delivered',
Valentina: 'delivered' }*/


const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
];


//Some es un metodo que retorna un booleano deacuerdo a que alguno de los elementso del array cumpla una condicion

console.log(team.some(item=> item.age >=18 ));//OUTPUT=true
console.log(team.filter(item=> item.age >=18));//[ { name: 'Santiago', age: 18 } ]

const words =['spray','limit','elite','exuberant'];

//every es un metodo que retorna un booleano deacuerdo a que todos loe elementso del array que se le pase por defecto cumplan la condicion

console.log(words.every(item => item.includes('e')));//false

const setOfNumbers = [1,2,3,4,5,6,6,6,7,8,9,9,10,10,10];

//reduce

console.log(setOfNumbers.reduce((arr,item)=>{
    item >= 5 ? arr.push(item):item =0;
    return arr
},[]),);//OUTPUT=[ 5, 6, 6, 6, 7, 8, 9, 9, 10, 10, 10 ]


//JOIN es un metodo que retorna un string anidando cada uno de los elementos de un array y los separa deacuerdo a lo que s ele pase por parametro
const elements =['fire','air','water'];

const useJoin=elements.join('--')
console.log(useJoin);//fire--air--water

//split es un metodo que recibe strings y los vueve un array, separando cada elemento deacuerdo a el elemnto que s ele pase por defecto

console.log(useJoin.split('--'));//[ 'fire', 'air', 'water' ]

const elementos = [1,1,2,2];
const otherElements=[3,3,4,4];

//Concat es un metodo que devuelve un array al acula se le adicionan los elementos que se le pasen por parametros

console.log(elementos.concat(otherElements));//[ 1, 1, 2, 2, 3, 3, 4, 4 ]