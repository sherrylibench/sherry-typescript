import fs from 'fs';

//undifined: uninitialized
let a;
console.log(a);

function example(a?:string){
    console.log(a);
}
example();

function example2(){
    // return void
}
console.log(example2());

const obj: any = {}
console.log(obj.value);

//null: unavailable
function getVowels(str: string){
    return str.match(/[aeiou]/gi);
}
console.log(getVowels('hello'))
console.log(getVowels('hhhhh'))

// fs.readFile(__filename,'utf-8',(error,contents)=>{
//     console.log(error,contents);
// });

//unify check using == !=
function example3(a:string|null|undefined){
    if(a==null){
        console.log(a);
    }    
    else{console.log(a);}
}
function example4(a:string|null|undefined){
    if(a!=null){
        console.log(a);
    }    
    else{console.log(a);}
}
// == loose equality, check value. first do type conversion,then check value.
console.log(null==null);
console.log(null==undefined);
console.log(undefined==undefined);
//=== strict equality, check type and value. first check type, then check value.
console.log(null===null);
console.log(null===undefined);
console.log(undefined===undefined);