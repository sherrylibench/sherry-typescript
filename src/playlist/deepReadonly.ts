type Example = {
    a: number
}
type ExampleMoreLevel = {
    a: {
        b: number
    }
}

let example: Readonly<Example> = {a:1}
// example.a = 2;

let exampleMoreLevel: Readonly<ExampleMoreLevel> = {a:{b:1}}
exampleMoreLevel.a.b = 2;

// type Readonly<T> = {
//     readonly [P in keyof T]: T[P]
// }

export type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>
}

let exampleMoreLevelDeepReadonly: DeepReadonly<ExampleMoreLevel> = {a:{b:1}}
// exampleMoreLevelDeepReadonly.a.b = 2;