// 기명 함수
function add(x: number, y: number): number {
    return x + y;
};

// 익명 함수
const myAdd = function (x: number, y: number): number { return x + y; };

// number 2개를 매개변수로 받고 number를 반환하는 함수를 변수에 지정한다는 지정
const myAdd2: (x: number, y: number) => number = function (x: number, y: number): number { return x + y; };

//선택적 매개변수와 기본 매개변수
function buildName(firstName: string, lastName: string): string {
    return firstName + " " + lastName;
}
// let buildNameResult1 = buildName("Bob");                  // 오류, 너무 적은 매개변수
// let buildNameResult2 = buildName("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let buildNameResult3 = buildName("Bob", "Adams");         // 정확함

// 선택적 매개변수 ?
function buildName2(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let buildName2Result1 = buildName2("Bob");                  // 지금은 바르게 동작
// let buildName2Result2 = buildName2("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let buildName2Result3 = buildName2("Bob", "Adams");         // 정확함

// 기본값 할당(js에서도 이제 지원)
function buildName3(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

// 나머지 매개변수
function RestParameters(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

// employeeName 은 "Joseph Samuel Lucas MacKinzie" 가 될것입니다.
let employeeName = RestParameters("Joseph", "Samuel", "Lucas", "MacKinzie");



//this
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // 아래 함수는 callee가 반드시 Deck 타입이어야 함을 명시적으로 지정합니다.
    // 메소드에서 클로저를 통해 suits를 기억하고 있다가 선택된 카드에 대한 객체를 반환
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
