// 기명 함수
function add(x, y) {
    return x + y;
}
;
// 익명 함수
var myAdd = function (x, y) { return x + y; };
// number 2개를 매개변수로 받고 number를 반환하는 함수를 변수에 지정한다는 지정
var myAdd2 = function (x, y) { return x + y; };
//선택적 매개변수와 기본 매개변수
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
// let buildNameResult1 = buildName("Bob");                  // 오류, 너무 적은 매개변수
// let buildNameResult2 = buildName("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
var buildNameResult3 = buildName("Bob", "Adams"); // 정확함
// 선택적 매개변수 ?
function buildName2(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var buildName2Result1 = buildName2("Bob"); // 지금은 바르게 동작
// let buildName2Result2 = buildName2("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
var buildName2Result3 = buildName2("Bob", "Adams"); // 정확함
// 기본값 할당(js에서도 이제 지원)
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
// 나머지 매개변수
function RestParameters(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
// employeeName 은 "Joseph Samuel Lucas MacKinzie" 가 될것입니다.
var employeeName = RestParameters("Joseph", "Samuel", "Lucas", "MacKinzie");
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // 아래 함수는 callee가 반드시 Deck 타입이어야 함을 명시적으로 지정합니다.
    // 메소드에서 클로저를 통해 suits를 기억하고 있다가 선택된 카드에 대한 객체를 반환
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
