const isobject = (obj)=> typeof obj == 'object';

const isArray = (arr)=> Array.isArray(arr);

const juan = {
    name: 'juan',
    age: 225,
    hoobies:{
        morning:'read',
        afternoon:'training',
        evening:'programming'
    }
}

const one = ['juan',{name:'juan',age:9,data:{bithday : '10/11/2003'}}];
const two ={
    name:'ana',
    hoobies:['run','play videogames',{name:'ana'}]
};

const deepCopy = (OBJ)=>{
    let copyObject;

    const isOBJArray = isArray(OBJ);
    const isOBJ = isobject(OBJ);

    if (isOBJArray){
        copyObject = [];
    }else if (isOBJ){
        copyObject={};
    }else{
        console.log('tu dato no es un objeto')
        return
    }

    for (i in OBJ){
        const isiArray = isArray(OBJ[i]);
        const isiOBJ = isobject(OBJ[i]);

        if (isOBJArray){
            if(isiArray){
                copyObject.push(deepCopy(OBJ[i]));
            }else {
                copyObject.push(OBJ[i]);
            }
        }else{
            if(isiOBJ){
                copyObject[i]=deepCopy(OBJ[i]);
            }else if(isiArray){
                copyObject[i]=copyObject.push(deepCopy(OBJ[i]));
            }else{
                copyObject[i]=OBJ[i];
            }
        }
    }
    return copyObject
}


console.log(deepCopy(one));
console.log(deepCopy(two));