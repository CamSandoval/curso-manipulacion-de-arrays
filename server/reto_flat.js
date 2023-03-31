//El reto es crear un flat 

const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function depth(arr){

    if(!Array.isArray(arr)) return [arr]
    let newArray =[];

    arr.forEach(item=>{
        if(!Array.isArray(item) ){
            newArray.push(item);
        }else{
            newArray.push(... depth(item));
        }
    })

    return newArray
}

const name ='juan';

console.log(depth(name));//OUTPUT=[ 'juan' ]
console.log(depth(matriz));//OUTPUT=[ 1, 2, 3, 4, 5, 6, 1, 2, 1, 2, 7, 8, 9 ]
