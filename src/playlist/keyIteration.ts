//literate object using key: explict keyof
export type Prizes = {
    first: string;
    second: string;
    //third: number;
}

const logPrizes = (prizes: Prizes) => {
    let key: keyof Prizes
    for(key in prizes){
        console.log(key, prizes[key].toLocaleLowerCase());
    }
}