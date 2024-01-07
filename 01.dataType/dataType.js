"use strict";
// Boolean
let isDone = false;
// number
let decimal = 6;
let hex = 0x00d;
let binary = 0b1010;
let octal = 0o744;
console.log(decimal, hex, binary, octal);
// string
let color = "blue";
color = 'red';
let fullName = `Bob Bobbington`;
let age = 37;
let sentence = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;
// Array
let list = [1, 2, 3];
let AnotherList = [1, 2, 3];
// Tuple
// 튜플 타입으로 선언
let x;
// 초기화
x = ["hello", 10]; // 성공
// 잘못된 초기화
// x = [10,"hello"]; // 오류
console.log(x[0].substring(1)); // 성공
// console.log(x[1].substring(1)); // 오류, 'number'에는 'substring'이 없습니다.
// x[3] = "world"; // 오류, '[string,number]' 타입에는 프로퍼티 '3'이 없습니다.
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color2.Green;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
let c3 = Color3.Green;
let colorName = Color2[2];
console.log("colorName : ", colorName);
// Any
let notSure = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExits();
notSure.toFixed(); // 성공, toFixed는 존재합니다. (하지만 컴파일러는 검사하지 않음)
let prettySure = 4;
// prettySure.toFixed(); // 오류: 프로퍼티 'toFixed'는 'Object'에 존재하지 않습니다.
let anyList = [1, true, "free"];
list[1] = 100;
// Void
function warnUser() {
    console.log("This is my warning message");
}
let unusable = undefined;
// unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만
// Null and Undefined
// 이 밖에 이 변수들에 할당할 수 있는 값이 없습니다!
let u = undefined;
let n = null;
// Never
// never를 반환한느 함수는 함수의 마지막에 도달할 수 없다.
function error(message) {
    throw new Error(message);
}
// 반환 타입이 never로 추론된다.
function fail() {
    return error("Something failed");
}
// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteloop() {
    while (true) {
    }
}
create({ prop: 0 }); // 성공
create(null); // 성공
// create(42); // 오류
// create("string"); // 오류
// create(false); // 오류
// create(undefined); // 오류
// Type assertions
let someValue = "this is a string";
let strLength = someValue.length;
let strLength2 = someValue.length;
