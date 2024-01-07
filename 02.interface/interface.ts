function printLabel(labelObj: { label: string }) {
    console.log(labelObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface LabelValue {
    label: string;
}

function printLabel2(labelObj: LabelValue) {
    console.log(labelObj.label);
}

printLabel2(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSqure = { color: "white", area: 100 };
    if (config.color) {
        newSqure.color = config.color;
    }
    if (config.width) {
        newSqure.area = config.width * config.width;
    }
    return newSqure;
}

let mySquare = createSquare({ color: "black" })
console.log(mySquare)

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x =5; //오류

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; //오류
// ro.push(5); //오류
// ro.length = 100; //오류
// a = ro; // 오류

a = ro as number[]; // 오버라이딩
console.log(a);

let spread = [...ro]; // 스프레드 연산자
console.log(spread);

interface SquareConfig2 {
    color?: string;
    width?: number;
}

function createSquare2(config: SquareConfig2): { color: string; area: number } {
    let newSqure = { color: "white", area: 100 };
    if (config.color) {
        newSqure.color = config.color;
    }
    if (config.width) {
        newSqure.area = config.width * config.width;
    }
    return newSqure;
}

// let mySquare2 = createSquare2({ width: 100, opacity: 0.5  }); // 그냥 적용하면 에러 발생
let mySquare2 = createSquare2({ width: 100, opacity: 0.5 } as SquareConfig2); // 타입 단언 사용시 에러 무시

// (string index signatuer)
interface SquareConfig3 {
    color?: string;
    width?: number;
    [propName: string]: any;
} // color와 width외의 다른 프로퍼티는 타입검사 x

let squareOptions = { colour: "red", width: 100 };
let mySquare3 = createSquare2(squareOptions); // 오브젝트를 변수에 할당하면 에러 x

let squareOptions2 = { colour: "red" };
// let mySquare = createSquare2(squareOptions2); // squareOptions2와 SquareConfig2사이에 공통된 속성이 존재하지않으므로 에러

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

// 매개변수의 이름까지 같을 필요는 없음
let mySearch2: SearchFunc;
mySearch2 = function (src: string, sub: string) {
    let result = src.search(sub);
    return result > -1;
}

let mySearch3: SearchFunc;
// error: Type '(src: string, sub: string) => string' is not assignable to type 'SearchFunc'.
// Type 'string' is not assignable to type 'boolean'.
// mySearch3 = function(src, sub) {
//     let result = src.search(sub);
//     return "string";
//   };

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

interface NotOkay {
    // 오류 : number로 인덱싱하였는데 , Animal은 string로 인덱싱 되어있음
    // [x: number]: Animal;
    [x: string]: Dog;
}

interface NumberDictionary {
    [index: string]: number;
    length: number; // 성공, length는 숫자입니다.
    // name:string; // 오류 'name'은 문자열입니다.
}

interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number; // 성공, length는 숫자입니다.
    name: string; // 성공 name은 문자열입니다.
}

//읽기전용으로 만들수도 있음
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[2] = "Mallory" // 오류 읽기전용에 값을 할당하려고함

interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) { };
}

interface ClockInterface2 {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock2 implements ClockInterface2 {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

//스태틱
interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface3;
}
interface ClockInterface3 {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface3 {
    return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface3 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface3 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


//클래스 표현
interface ClockConstructor2 {
    new(hour: number, minute: number): ClockInterface4;
}

interface ClockInterface4 {
    tick(): void;
}

const Clock3: ClockConstructor2 = class Clock implements ClockInterface4 {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}

// 확장하기
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;

// 여러조합 생성가능
interface Shape2 {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square2 extends Shape2, PenStroke {
    sideLength: number;
}

let square2 = {} as Square2;
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = (function (start: number) { }) as Counter;
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

class Control {
    private state: any;
}

interface SelectableControl extends Control{
    select() : void;
}

class Button extends Control implements SelectableControl{
    select(): void {
        
    }
}

class TextBox extends Control{
    select(){}
}

// Error: Property 'state' is missing in type 'Image'.
/*
class Image implements SelectableControl{
    private state:any;
    select(): void {
        
    }
}
*/