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


const rta = orders.filter(item => item.delivered);
console.log(rta);/*[
    { customerName: 'Nicolas', total: 60, delivered: true },
    { customerName: 'Santiago', total: 180, delivered: true },
    { customerName: 'Valentina', total: 240, delivered: true }
  ]*/

const rta2 = orders.filter(item => item.delivered && item.total >= 100);
console.log(rta2);/*[
    { customerName: 'Santiago', total: 180, delivered: true },
    { customerName: 'Valentina', total: 240, delivered: true }
  ]*/

// Funcion buscadora con filter

const search = (query)=>{
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Nico'));//[ { customerName: 'Nicolas', total: 60, delivered: true } ]
console.log(search('Zule'));/*[
    { customerName: 'Zulema', total: 120, delivered: false },
    { customerName: 'Zulema', total: 120, delivered: false }
  ]*/