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

function buildName2(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let buildName2Result1 = buildName2("Bob");                  // 지금은 바르게 동작
// let buildName2Result2 = buildName2("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let buildName2Result3 = buildName2("Bob", "Adams");         // 정확함


//PR 테스트