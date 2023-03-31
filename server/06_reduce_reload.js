const items=[1,3,2,3,50,4,2,1,1,50];

const rta = items.reduce((obj,element)=>{
    if(!obj[element]){
        obj[element]= 1;
    }else{
        obj[element] = obj[element]+1;
    }
    return obj
},{})

console.log(rta);//{ '1': 3, '2': 2, '3': 2, '4': 1, '50': 1 }

//Ejercicio, crear un algoritmo que muestre unicamnet los numero mayores que 5 y la cantidad de veces que se repiten

const numbers=[1,2,3,4,5,6,7,8,9];

// Opciones de solucion
// function ArrayFliter (arr){
//     const filter = arr.filter(item => item >=5);
//     const answer = filter.reduce((result,element)=>{
//         if(!result[element]){
//             result[element] = 1;
//         } else {
//             result[element] = result[element]+1;
//         }
//         return result
//     },{})
//     return answer
// }

//Solucion con pipelines o concatenacion de metodos
function ArrayFliter(arr){
    const answer = arr
    .filter(items => items >= 5)
    .reduce((obj,element)=>{
        if(!obj[element]){
            obj[element]= 1;
        }else{
            obj[element]= obj[element] +1;
        }
        return obj
    },{})

    return answer
}


console.log(ArrayFliter(numbers));//{ '5': 1, '6': 1, '7': 1, '8': 1, '9': 1 }


// Ejercicio: retorna un array con la cantidad de usuarios que estan en cada nivel

const data =[
    {
        name:'Nicolas',
        level: 'low'
    },
    {
        name:'Andrea',
        level: 'medium'
    },
    {
        name:'Zulema',
        level: 'hight'
    },
    {
        name:'Santiago',
        level: 'low'
    },
    {
        name:'Valentina',
        level: 'medium'
    },
    {
        name:'Lucia',
        level: 'hight'
    },
];

const rta1 = data 
.map(item => item.level)
.reduce((obj,element)=>{
    if(!obj[element]){
        obj[element] = 1;
    }else{
        obj[element] = obj[element] +1;
    }
    return obj
},{})

console.log(rta1);//{ low: 2, medium: 2, hight: 2 }


//Ejercicio: crear un algoritmo que cuente cuantos numeros hay en un array por grupos de 1-5, 6-8 y 9-10

const setOfNumbers = [1,2,3,4,5,6,6,6,7,8,9,9,10,10,10];

const setReduce = setOfNumbers
.reduce((obj,item)=>{
    if(item <= 5 && item >= 1){
        if (!obj['1-5']){
            obj['1-5'] = 1
        }else{
            obj['1-5'] +=1
        }
    }else if(item >=6 && item <=8){
        if(!obj['6-8']){
            obj['6-8']=1;
        }else{
            obj['6-8'] +=1
        }
    }else {
        if(!obj['9-10']){
            obj['9-10']=1;
        }else{
            obj['9-10'] +=1
        }
    }
    return obj
},{});

console.log(setReduce);//OUTPUT = { '1-5': 5, '6-8': 5, '9-10': 5 }

//otras opcion de solucion:

const rta4 = setOfNumbers.reduce((obj,item)=> {
    if (item <= 5 && item >= 1){
        obj['1-5'] +=1
    }else if(item >=6 && item <=8){
        obj['6-8']=1;
    }else{
        obj['9-10'] +=1
    }

    return obj
},{
    '1-5':0,
    '6-8':0,
    '9-10':0
})

console.log(setReduce);//{ '1-5': 5, '6-8': 5, '9-10': 5 }
