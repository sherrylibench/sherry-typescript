//1. classes(new es6) = functions(old js)
//class: proporty, constructor, function, get set

//2.encapsulation & inheritance & polymorphism

//encapsulation:
//public(parent child outside), private(parent), protected(parent child)
//(public)static(util function)
//readonly

//before es6
function Message(title, message, isSend){
    this.title = title;
    this.message = message;
    this.isSend = isSend;
    this.previewMessage  = function(val){
        const sendMessage = this.isSend? 'send': 'not send';
        return `${val} ${this.message} | ${sendMessage}`
    }

}
const message = new Message('hello','hello',1);

//new class feature
export class Message {
    title: string;
    message: string;
    isSend: boolean;
    comstructor(title: string, message: string){
        this.title = title;
        this.message = message;
        this.isSend = false;
    }
    previewMessage(): string {
        return this.message.slice(0,10).concat('...');
    }

    get messageStatus(): string {
        const sendMessage = this.isSend? 'send': 'not send';
        return `${this.message} | ${sendMessage}`
    }
    set setSend(value: boolean){
        this.isSend = value;
    }
}
const message = new Message('hello','hello');

//inheritance
//base class
export class Animal {
    legs: number;
    lives = 1;
    constructor(legs: number){
        this.legs = legs;
    }
}
//extends: parent and child
export class Dog extends Animal{
    override lives = 9;
    constructor(anotherVal: string, legs: number){
        super(legs);
        super.lives;// still 9, property will be overrider permanently even if you use super!!!
        //other code
    }
    woof(): string{
        return 'woof';
    }
    //add more override functions here.
}
const dog = new Dog('qqq', 4);
dog.woof()
//implements: subclass same shape as super class
export class Cat implements Animal{
    legs: number;
    constructor(){

    }
    meow(): string{
        return 'meow';
    }
}
const cat = new Cat();
cat.meow()

console.log(dog instanceof Animal)//true
console.log(cat instanceof Animal)//false
