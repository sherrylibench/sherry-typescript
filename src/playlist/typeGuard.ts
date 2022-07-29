//:s is Square
type Square = {
    type: 'square';
    size: number
}
type Rectangle = {
    type: 'rec';
    height: number;
    width: number;
}

type Shape = Square | Rectangle;

const getShapes = () => {
    return [
        {} as Square,
        {} as Rectangle
    ]
}

const shapes: Shape[] = getShapes();

// const square = shapes.find( (shape): shape is Square => shape.type === 'square' );
// square?.size

// const recs = shapes.filter( (shape): shape is Rectangle => shape.type === 'rec' );
// recs.map((r)=>r.height)

export const isSquare = (s:Shape): s is Square => s.type === 'square' 
const square = shapes.find(isSquare);
square?.size

const isRectangle = (s:Shape): s is Rectangle => s.type === 'rec' 
const recs = shapes.filter( isRectangle);
recs.map((r)=>r.height)