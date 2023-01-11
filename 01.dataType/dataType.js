// Boolean
var isDone = false;
// number
var decimal = 6;
var hex = 0x00d;
var binary = 10;
var octal = 484;
console.log(decimal, hex, binary, octal);
// string
var color = "blue";
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is ".concat(fullName, ".\nI'll be ").concat(age + 1, " years old next month.");
// Array
var list = [1, 2, 3];
var AnotherList = [1, 2, 3];
// Tuple
// 튜플 타입으로 선언
var x;
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
var c = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
var c3 = Color3.Green;
var colorName = Color2[2];
console.log("colorName : ", colorName);
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExits();
notSure.toFixed(); // 성공, toFixed는 존재합니다. (하지만 컴파일러는 검사하지 않음)
var prettySure = 4;
// prettySure.toFixed(); // 오류: 프로퍼티 'toFixed'는 'Object'에 존재하지 않습니다.
var anyList = [1, true, "free"];
list[1] = 100;
// Void
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
// unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만
// Null and Undefined
// 이 밖에 이 변수들에 할당할 수 있는 값이 없습니다!
var u = undefined;
var n = null;
