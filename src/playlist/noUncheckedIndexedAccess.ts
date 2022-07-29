export const nums =[1,2,3]

if(nums[3]){
    const a: number = nums[3];
}

// const a = nums[3].toFixed;
//fix
const b = nums[3]?.toFixed;
const c = nums[3]!.toFixed;//runtime error

console.log(b);
console.log(c);