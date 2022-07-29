//type alias: union,primitives,shorthand functions,advanced type functions
//interface: declaration merging
export interface Point2D{
    x:number,
    y:number
}
export type Point2DType = {
    x:number,
    y:number
}
export interface Point3D extends Point2D{
    z:number
}
export type Point3DType = Point2DType &{
    z:number
}

const a:Point3D = {
    x:1,
    y:2,
    z:3
}
const aa:Point3DType = {
    x:1,
    y:2,
    z:3
}
export class Example implements Point3D{
    x = 1;
    y = 2;
    z = 3;
}
export class Example2 implements Point3DType{
    x = 1;
    y = 2;
    z = 3;
}

//
export interface Request{
    body: string
}
export interface Request{
    json: string
}
export function handler(req: Request){
    req.body;
    req.json;
}

//
type InputOnChange = (newValue: string) => void 
interface InputOnChangeInterface {
    (newValue:string):void
}

type InputValue = string
//no interface for primitive types
type InputType = 'text' | 'email'
//no interface for union, conditional types...

export type InputProps = {
    type:InputType,
    value:InputValue,
    onChange:InputOnChange
}