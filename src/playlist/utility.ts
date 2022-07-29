for(let x = 0; x < 100; x++){
    if(x % 9 === 0)
        console.log(x)
}

export function getNth<T>(arr: T[], nth: number): T[]{
    return arr.filter((_,i)=>i % nth === 0)
}
console.log(getNth([10,1,2,3,4,5,6],3));