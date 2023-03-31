//veremos diferentes tipos de metdod sque son mutables o modifican los arrays
const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);/*products [ { title: 'Pizza', price: 121, id: '🍕' },
{ title: 'Burger', price: 121, id: '🍔' },
{ title: 'Hot cakes', price: 121, id: '🥞' } ]*/
console.log("myProducts", myProducts);//myProducts []
console.log("-".repeat(10));


//Ejemplo de como podemos trasferir un elemnto en especifico de un array a otro mutando el original
const index = products.findIndex(item=> item.id=== '🍔');
if(index != -1) {
    myProducts.push(products[index]);
    products.splice(index,1);
}

console.log("products", products);/*products [ { title: 'Pizza', price: 121, id: '🍕' },
{ title: 'Hot cakes', price: 121, id: '🥞' } ]*/
console.log("myProducts", myProducts);//myProducts [ { title: 'Burger', price: 121, id: '🍔' } ]
console.log("-".repeat(10));

//Ejemplo del transferir un elemento sin mutar

const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts2 = products2.filter(i=> i.id ==='🍔');
console.log(myProducts2);//[ { title: 'Burger', price: 121, id: '🍔' } ]


//Actualizar valores del array mutando el original
const update = {
    id: '🥞',
    changes:{
        price : 200,
        description:'delicioso'
    }
}

const index2= products2.findIndex(item=> item.id === update.id);
products2[index2]={
    ...products2[index2],
    ...update.changes
};

console.log(products2);/*[ { title: 'Pizza', price: 121, id: '🍕' },
{ title: 'Burger', price: 121, id: '🍔' },
{ title: 'Hot cakes', price: 200, id: '🥞', description: 'delicioso' } ]*/

//Actualizando valores sin mutar
const products3 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update2 = {
    id: '🥞',
    changes:{
        price : 200,
        description:'delicioso'
    }
}

const index3= products3.findIndex(item=> item.id === update2.id);

const myproducts3 = [...products3];
myproducts3[index3] = {
    ...myproducts3[index3],
    ...update2.changes
}

console.log(myproducts3);/*
[ { title: 'Pizza', price: 121, id: '🍕' },
{ title: 'Burger', price: 121, id: '🍔' },
{ title: 'Hot cakes', price: 200, id: '🥞', description: 'delicioso' } ]*/