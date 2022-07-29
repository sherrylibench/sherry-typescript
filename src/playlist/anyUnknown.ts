//same: accept all type diff:type safety
export let a: any;
a.b.c.run();
const xxx: boolean = a;

let b: unknown;
// b.trim();
// const yyy: boolean = b;

//check type before use
typeof b == 'string' && b.trim();
if(typeof b == 'boolean'){
    const yyy: boolean = b;
} 

//real world example
//any: quick js migration to ts
//unknown: reliable refactoring, safe type check