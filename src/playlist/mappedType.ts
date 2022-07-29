export type Point = {
    x: number,
    y: number,
};

// type ReadonlyPoint<T> = {
//      readonly [P in keyof T]:T[P]
// };

const a: Readonly<Point> = {
    x: 1,
    y: 2,
}

//readonly
// a.x = 111;

// readonly map<T> = Readonly<T>

type MyMap<T> = {
    [key in keyof T]: T[key]
}