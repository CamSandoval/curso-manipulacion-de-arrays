//Some es un metodo que retorna un booleando dependiendo de si ALGUNO de los elementos del array cumple con la condición planteada 

//Ejemplo con for :

const numbers=[1,2,3,4];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 === 0) {
        rta = true; 
        break;
    }
}

console.log(rta)// true

//Solucion con some

const rta1 = numbers.some(element => element %2 ===0);
console.log('rta con some',rta1);//rta con some true

//Ejercicios

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

const someOrders = orders.some(element => element.delivered);
console.log('Alguna orden fue entregada ?',someOrders);//Alguna orden fue entregada ? true

//Ejercicio 2

import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping/index.js'
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 20, 30),
};

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log('Las fechas se sobreponen',isOverlap(newAppointment));//Las fechas se sobreponen true