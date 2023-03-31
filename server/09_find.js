//El metodod find retorna el valor del primer elemento que cumpla una condición, en caso de no encontarlo retornara undefined

const numbers =[1,30,5,54,8,45,13];


//Ejemplo con for
let rta = undefined;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30){
        rta = element
        break;
    }
}

console.log('for',rta);//for 30

//Ejemplo con find

const rta2 = numbers.find(element => element ===30);
console.log('uso de find', rta2);//uso de find 30

const rta3 = numbers.find(element => element <=0);
console.log('uso de find', rta3)//uso de find undefined

//EJERCICIOS

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

const rta4 = products.find(item => item.id ==='🍔');
console.log('find',rta4);//find { name: 'Burger', price: 23, id: '🍔' }


//FINDINDEX, es basicamente lo mismo que find, solo que este no retorna el elemento, sino que su posición dentro de array
const rta5 = products.findIndex(item => item.id ==='🍔');
console.log('uso de findIndex',rta5);//uso de findIndex 1

