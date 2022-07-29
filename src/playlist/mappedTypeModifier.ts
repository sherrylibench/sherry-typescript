type Point = {
    readonly x: number,
    y?: number,
};

export type Mapped<T> = {
    +readonly [P in keyof T]?: T[P]
}
export type Result = Mapped<Point>;

export class State<T>{
    constructor(public current: T){}
    update(next: Partial<T>){
        this.current = {...this.current, ...next}
    }
}
const state = new State<Point>({x:1, y:2});
state.update({y:22})
console.log(state.current);

//+ - readonly ?
//Partial<T> = map +?