//El método flatMap es inmutable y consiste en la combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
];

const rta = users.map(item =>item.attributes).flat();
console.log('map-flat',rta);//map-flat [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

const rta2= users.flatMap(item=> item.attributes);
console.log('usando flatMap',rta2);//usando flatMap [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
};


//Solucion PROPIA

function citas(obj){
    let answer =[];
    answer.push(obj.primaryCalendar);
    answer.push(obj.secondaryCalendar);
    
    const rta = answer.flat();
    return rta.map(item=>item.startDate)
}

console.log('Funcion propia',citas(calendars));/*[
    2021-02-01T20:00:00.000Z,
    2021-02-01T22:00:00.000Z,
    2021-02-01T17:00:00.000Z,
    2021-02-01T14:00:00.000Z
]*/

//Solicion del PROFESOR

console.log('___________________________________');
const rta3 =Object.values(calendars).flatMap(item=>{
    return item.map(element=> element.startDate)
});

console.log(rta3);/*[
    2021-02-01T20:00:00.000Z,
    2021-02-01T22:00:00.000Z,
    2021-02-01T17:00:00.000Z,
    2021-02-01T14:00:00.000Z
]*/
