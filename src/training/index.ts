//1.convert js to ts
//node tsc tsconfig.json(target module strict include)
//rename to ts, any

//2.basic types
//function: function, function as variable, interface property function
interface Contact {
    id: number;
    name: string;
    func(source: Contact): Contact
}
function clone(source: Contact, func: (source: Contact) => Contact ): Contact {
    return Object.apply({}, [source]);
}

//3.complex types
//indexed access type, records
//partial, omit, required, readonly
//map
let r: Record<string, string|boolean|number|Function> = {name: 'aaa'}
r.age = 111;
r.log = () => console.log('great!');

//4.decorator?????

//5.module
//ecma syntex, type definition, declaration merging
