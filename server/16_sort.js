//Sort es un metdodo que retorna el mismo array solamante que lo orden adeacuerdo a como queramos

const months = ["March", "Jan", "Feb", "Dec"];

months.sort();
//Este resultado es debido a la organizacion de letras dentro del codigo ASCII
console.log(months);//[ 'Dec', 'Feb', 'Jan', 'March' ]
const numbers = [1, 30, 4, 21, 100000];

numbers.sort();
console.log(numbers);//[ 1, 100000, 21, 30, 4 ], de nuevo este resultado es debido a la organizacion de ASCII

//Si queremos que esto se vea reflejado con el orden correcto, debemos modificar sort

//Menor a mayor
//sort recibira una funcion que comparará cada elemento dle array con el anterior deacuerdo a que este sea menor que el anterior
numbers.sort((a,b)=>a-b);
console.log(numbers);//[ 1, 4, 21, 30, 100000 ]

//Mayor a menor
numbers.sort((a,b)=>b-a);//[ 100000, 30, 21, 4, 1 ]
console.log(numbers);

//Con palabras
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

words.sort();
console.log(words);
/*[ 'adieu',
  'banana',
  'café',
  'communiqué',
  'premier',
  'réservé',
  'éclair' ]*/

// otra opcion 

words.sort((a,b)=> a.localeCompare(b));
console.log(words);
/*[ 'adieu',
  'banana',
  'café',
  'communiqué',
  'éclair',
  'premier',
  'réservé' ]*/

//Sort con objetos
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort((a,b)=>a.total - b.total);
console.log(orders);/*
[ { customerName: 'Zulema', total: 120, delivered: false },
  { customerName: 'Valentina', total: 240, delivered: true },
  { customerName: 'Nicolas', total: 600, delivered: true },
  { customerName: 'Santiago', total: 1840, delivered: true } ]*/