"use strict";
function printLabel(labelObj) {
    console.log(labelObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel2(labelObj) {
    console.log(labelObj.label);
}
printLabel2(myObj);
function createSquare(config) {
    let newSqure = { color: "white", area: 100 };
    if (config.color) {
        newSqure.color = config.color;
    }
    if (config.width) {
        newSqure.area = config.width * config.width;
    }
    return newSqure;
}
let mySquare = createSquare({ color: "black" });
console.log(mySquare);
let p1 = { x: 10, y: 20 };
// p1.x =5; //오류
let a = [1, 2, 3, 4];
let ro = a;
// ro[0] = 12; //오류
// ro.push(5); //오류
// ro.length = 100; //오류
// a = ro; // 오류
a = ro; // 오버라이딩
console.log(a);
let spread = [...ro]; // 스프레드 연산자
console.log(spread);
function createSquare2(config) {
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
let mySquare2 = createSquare2({ width: 100, opacity: 0.5 }); // 타입 단언 사용시 에러 무시
let squareOptions = { colour: "red", width: 100 };
let mySquare3 = createSquare2(squareOptions); // 오브젝트를 변수에 할당하면 에러 x
let squareOptions2 = { colour: "red" };
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
// 매개변수의 이름까지 같을 필요는 없음
let mySearch2;
mySearch2 = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
let mySearch3;
let myArray;
myArray = ["Bob", "Fred"];
let myStr = myArray[0];
class Animal {
}
class Dog extends Animal {
}
let myArray2 = ["Alice", "Bob"];
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
    }
    ;
}
class Clock2 {
    setTime(d) {
        this.currentTime = d;
    }
    constructor(h, m) {
        this.currentTime = new Date();
    }
}
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock {
    constructor(h, m) { }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
const Clock3 = class Clock {
    constructor(h, m) { }
    tick() {
        console.log("beep beep");
    }
};
let square = {};
square.color = "blue";
square.sideLength = 10;
let square2 = {};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
function getCounter() {
    let counter = (function (start) { });
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
class Control {
}
class Button extends Control {
    select() {
    }
}
class TextBox extends Control {
    select() { }
}
// Error: Property 'state' is missing in type 'Image'.
/*
class Image implements SelectableControl{
    private state:any;
    select(): void {
        
    }
}
*/ 
