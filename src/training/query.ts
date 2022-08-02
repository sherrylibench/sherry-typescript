type ContactStatus = 'active' | 'inactive'
type Address = {
    postcode: number;
    street: string;
}
type Contact = {
    name: string;
    age: number;
    status?: ContactStatus;
    address?: Address
}

type Query<T> = {
    [P in keyof T]+? : (val: T[P]) => boolean
}

const queryItems = <T>(items: T[], queries: Query<T>): T[] => {
    return items.filter((item) => {
        for(const prop of Object.keys(item) as (keyof T)[]){
            const propQuery = queries[prop];
            if(propQuery && propQuery(item[prop])){
                return true;
            }
        }
        return false;
    });
}


const contacts: Contact[] = [{name:'aaa', age: 1},{name: 'ccc', age:2}];
const queries: Query<Contact> = {name:name=> name === 'bbb',age: age => age === 2};

const results = queryItems<Contact>(contacts, queries);
export default queryItems;

console.log(results)