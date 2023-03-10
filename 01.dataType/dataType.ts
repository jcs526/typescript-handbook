// Boolean
let isDone: boolean = false;

// number
let decimal: number = 6;
let hex: number = 0x00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(decimal, hex, binary, octal);

// string
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`

// Array
let list: number[] = [1, 2, 3];
let AnotherList: Array<number> = [1, 2, 3];

// Tuple
// 튜플 타입으로 선언
let x: [string, number];

// 초기화
x = ["hello", 10] // 성공
// 잘못된 초기화
// x = [10,"hello"]; // 오류

console.log(x[0].substring(1)); // 성공
// console.log(x[1].substring(1)); // 오류, 'number'에는 'substring'이 없습니다.

// x[3] = "world"; // 오류, '[string,number]' 타입에는 프로퍼티 '3'이 없습니다.

// Enum
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

enum Color2 { Red = 1, Green, Blue }
let c2: Color2 = Color2.Green;

enum Color3 { Red = 1, Green = 2, Blue = 4 }
let c3: Color3 = Color3.Green;

let colorName: string = Color2[2];

console.log("colorName : ", colorName);

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

notSure.ifItExits();
notSure.toFixed(); // 성공, toFixed는 존재합니다. (하지만 컴파일러는 검사하지 않음)

let prettySure: Object = 4;
// prettySure.toFixed(); // 오류: 프로퍼티 'toFixed'는 'Object'에 존재하지 않습니다.

let anyList: any[] = [1, true, "free"];

list[1] = 100;

// Void
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;
// unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만

// Null and Undefined
// 이 밖에 이 변수들에 할당할 수 있는 값이 없습니다!
let u: undefined = undefined;
let n: null = null;

// Never
// never를 반환한느 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
    throw new Error(message);
}

// 반환 타입이 never로 추론된다.
function fail() {
    return error("Something failed");
}

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteloop(): never {
    while (true) {
    }
}

// Object
declare function create(o:object|null) :void;

create({ prop: 0 }); // 성공
create(null); // 성공

// create(42); // 오류
// create("string"); // 오류
// create(false); // 오류
// create(undefined); // 오류

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
