//partial<type>
type MyPartial<T> = {
    [P in keyof T]?: T[P]
}

function setPartialProps (props: Partial<Props>){
    //....
}

class Statue<T>{
    constructor(public current:T){}
    update(newVal: Partial<T>){
        this.current = {...this.current, ...newVal}
    }
}

const statue = new Statue({x:1,y:1});
statue.update({y:333})
console.log(statue.current)


//pick<type, some fields of type>
export type Props = {
    color?: string;
    width?: number;
    height?: number;
    // a lot....
}

function setPickProps (props: Pick< Props, 'color'|'height'>){
    //....
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

//required<type>
type MyRequired<T> = {
    [P in keyof T]-? : T[P]
}
class PropsSetup{
    private config: Required< Props>;
    constructor(cfg: Props){
        this.config = {
            color: cfg.color ?? 'red',
            width: cfg.width ?? 1,
            height: cfg.height ?? 1,
        }
    }
    useProps(){
        this.config.color;
    }
}

//readonly<type>
type MyReadonly<T> = {
    +readonly [P in keyof T]: T[P]
}

function makeReadonly<T>(object : T): Readonly<T>{
    return Object.freeze({...object})
}

const a = makeReadonly({x:1,y:2});
// a.x= 222;