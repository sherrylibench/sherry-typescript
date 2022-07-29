//Boolean !!

//same runtime
let a =0;
const b = Boolean(a);
const c = !!a;

//different type behavior
export const use = (response: {value: string}) =>{
    console.log(response.value);
}

const getFromNetwork = (): {value: string}|null =>{
    return {value: 'get from network call'}
}
let response = getFromNetwork();


// if(response){
//     use(response)
// }else{
//     //use(response)
// }

!!response && use(response)
// Boolean(response) && use(response)
    