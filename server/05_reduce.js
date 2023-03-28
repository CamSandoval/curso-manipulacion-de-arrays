//Reduce es un metodo inmutable que lo que hace es reducir un array a un solo elemento mediante dos parametros, una funcion y el valor inicial desde el cual va iterar


const totals =[1,2,3,4];

//Ecplicacion de recude con un for
let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum += element
}
console.log(sum);//10

//Uso de reduce 
    //El definir que sum = 0 no es nesesario bastaria con poner solo el 0 pero a manera de ejemplo para hacerlo mas claro se puede usar
const rta = totals.reduce((sum,element)=> sum + element, sum =0);

console.log('Uso de reduce',rta);//Uso de reduce 10

