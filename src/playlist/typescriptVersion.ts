// type Attributes = {
//     color?: string;
//     [data: string]: string|undefined
// }

export type Attributes = {
    color?: string;
    [data: `data-${string}`]: string|undefined
}

const classic: Attributes = {
    // clour: 'red',
    color: 'red',
    'data-name': 'classic'
}