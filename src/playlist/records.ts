//record is a map wrapper

type Persons = Record<string,{name:string,role:string}>
type PersonsSame = {[key:string]:{name:string,role:string}}

const persons: Persons = {};
persons['111'] = {name:'aaa', role:'admin'}
persons['222'] = {name:'bbb', role:'owner'}

const personsSame: PersonsSame = {};
persons['111'] = {name:'aaa', role:'admin'}
persons['222'] = {name:'bbb', role:'owner'}

type Roles = 'admin'|'owner';
let peopleWithRoles: Record<Roles,string[]> = {
    'admin':['aaa','bbb'],
    'owner':['ccc']
}
let peopleWithRolesSame: {[key in Roles]:string[]} = {
    'admin':['aaa','bbb'],
    'owner':['ccc']
} 

// peopleWithRoles = {
//     'admin':['aaa','bbb'],
// } 

peopleWithRoles.admin;
peopleWithRoles.owner;
peopleWithRoles['admin'];
peopleWithRoles['owner'];

type Point = {
    x:number,
    y:number
}
type PointSame = Record<'x'|'y',number>

// practice
type Page = {
    id:string;
    title:string;
}
type Pages = {
    home : Page,
    contact: Page,
    about: Page,
}

export type PagesSame = Record<'home'|'contact'|'about', {id:string,title:string}>