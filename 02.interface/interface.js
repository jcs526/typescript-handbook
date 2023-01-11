var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel2(labelObj) {
    console.log(labelObj.label);
}
printLabel2(myObj);
function createSquare(config) {
    var newSqure = { color: "white", area: 100 };
    if (config.color) {
        newSqure.color = config.color;
    }
    if (config.width) {
        newSqure.area = config.width * config.width;
    }
    return newSqure;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var p1 = { x: 10, y: 20 };
// p1.x =5; //오류
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12; //오류
// ro.push(5); //오류
// ro.length = 100; //오류
// a = ro; // 오류
a = ro; // 오버라이딩
console.log(a);
var spread = __spreadArray([], ro, true); // 스프레드 연산자
console.log(spread);
function createSquare2(config) {
    var newSqure = { color: "white", area: 100 };
    if (config.color) {
        newSqure.color = config.color;
    }
    if (config.width) {
        newSqure.area = config.width * config.width;
    }
    return newSqure;
}
// let mySquare2 = createSquare2({ width: 100, opacity: 0.5  }); // 그냥 적용하면 에러 발생
var mySquare2 = createSquare2({ width: 100, opacity: 0.5 }); // 타입 단언 사용시 에러 무시
var squareOptions = { colour: "red", width: 100 };
var mySquare3 = createSquare2(squareOptions); // 오브젝트를 변수에 할당하면 에러 x
var squareOptions2 = { colour: "red" };
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
// 매개변수의 이름까지 같을 필요는 없음
var mySearch2;
mySearch2 = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var mySearch3;
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
