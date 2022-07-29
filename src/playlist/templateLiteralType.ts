// type

//literal type
let str:string;
str = 'hello';
str = 'www';

let strLiteral: 'hello';
//strLiteral = 'www';

//template literal type
let a= `example ${'val'}`
a = 'another value'

let b: `example ${string}`
b = 'example value'
//b = 'another value'

//real usecases
// type CSSValue = number | string;
type CSSValue = number | `${number} px`| `${number} em`;
function size(input: CSSValue){
    return typeof input == 'number' ? input + 'px': input; 
}
size(32);
size('32 px')
size('32 em')
//size('32 wrong')

type Size =  'small'|'medium'|'large';
type Color =  'primary'|'second';
export type Style = `${Size}-${Color}` //6
function applyStyle(input: Style){
    //
}
applyStyle('large-primary');