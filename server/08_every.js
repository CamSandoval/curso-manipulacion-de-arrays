//every es un metodo que retorna un booleano de acuerdo a que TODOS los elemntos del array cumplan con una condicion
const numbers = [1,30,43,29,10,13];

//Ejemplo con for
  //Queremos creaer un algoritmo que vea si todos los elemstos del arrary son menores que 40
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >=40){
        rta = false;
        break
    }
}

console.log(rta);//false

const useEvery = numbers.every(item => item <= 40);
console.log(useEvery);//false


//Ejercicio: validar que todos los integrantes del array tengan una edad menor a 15 años
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

console.log(team.every(i => i['age'] <=15));//false