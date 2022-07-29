//call back(can be sync(safe) or unsync(unsafe))  unsafe
export let example:string|null = 'sssss';
if(example!=null){
    const cloneExample = example;
    console.log('test'+example);
    ['a','b'].forEach(v => {
        let newExample = v+cloneExample.toLowerCase;
    })
    setTimeout(()=>{
        console.log(cloneExample.toUpperCase);
        //console.log(example?.toUpperCase);
    })
} 
example = null;