//Como sabemos map es un metodo ultilizado para realizar transformaciones a cada uno de los metodos de un array, pero cuando se quisiese trabajar con objetos, debemos tener en centa que estsos estan sujetos a las reflas de js que estable ce trabajar con la memoria HEAD

    //Y como sabemos esto puede generar ciertos problemas
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
];

//Si solamente nesesitasemos una parte de cada objeto del array no habria problemas
const rta = orders.map(i => i.total);
console.log('original', orders);/*original [
    { customerName: 'Nicolas', total: 60, delivered: true },
    { customerName: 'Zulema', total: 120, delivered: false },
    { customerName: 'Santiago', total: 180, delivered: true },
    { customerName: 'Valentina', total: 240, delivered: true }
  ]*/
console.log('rta',rta);//rta [ 60, 120, 180, 240 ]

//Pero se llegasemos a neseistar realizar una modificacion a cada objeto del array

// const rta2 = orders.map((item)=>{
//     item.tags = 0.19;
//     return item;
// });
//Como vemos tabién se ha modificado el array original, todo esto debido a que en la rta2 hemos retornado el item, haciendo que la referencia en memoria que guarda al los objetos tambien se vea modificada
/*console.log('original', orders);original [
    { customerName: 'Nicolas', total: 60, delivered: true, tags: 0.19 },
    { customerName: 'Zulema', total: 120, delivered: false, tags: 0.19 },
    { customerName: 'Santiago', total: 180, delivered: true, tags: 0.19 },
    { customerName: 'Valentina', total: 240, delivered: true, tags: 0.19}
  ]
console.log('rta2', rta2); rta2 [
    { customerName: 'Nicolas', total: 60, delivered: true, tags: 0.19 },
    { customerName: 'Zulema', total: 120, delivered: false, tags: 0.19 },
    { customerName: 'Santiago', total: 180, delivered: true, tags: 0.19 },
    { customerName: 'Valentina', total: 240, delivered: true, tags: 0.19}
  ]*/

const rta3 = orders.map(item =>{
    return {
        ... item,
        tax: 0.19
    }
});


//Como podemos ver, si retornamos un objeto con el spread operator ya no tendremos dicho probema y podremos realizar nuestro map sin prpblemas
console.log('original', orders);/*original [
    { customerName: 'Nicolas', total: 60, delivered: true },
    { customerName: 'Zulema', total: 120, delivered: false },
    { customerName: 'Santiago', total: 180, delivered: true },
    { customerName: 'Valentina', total: 240, delivered: true }
  ]*/
console.log('rta3',rta3);/*rta3 [
    { customerName: 'Nicolas', total: 60, delivered: true, tax: 0.19 },
    { customerName: 'Zulema', total: 120, delivered: false, tax: 0.19 },
    { customerName: 'Santiago', total: 180, delivered: true, tax: 0.19 },
    { customerName: 'Valentina', total: 240, delivered: true, tax: 0.19 }
  ]*/
