// 스코프
/*
전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
전역 스코프 : 전체 영역에서 접근이 가능
지역 스코프 : 특정 영역에서만 접근 가능
*/
let a = 1; // 전역 스코프 (어디서든 접근 가능)

function funcA() {
    let b = 2; // 지역 스코프 (함수 외부에서 접근 불가)
    console.log(a); 
 }

 funcA();
//console.log(b);

if (true) {
    let c = 1; // 지역 스코프
}
console.log(c); 

for (let i = 0; i < 10; i++) {
    let d = 1; // 지역 스코프
}
console.log(d);

// 함수도 변수처럼 지역변수를 갖게된다
// 예외적으로 조건문, 반복문에서는 지역 스코프를 갖지 않는다.
// 함수 선언식은 특별하게 함수블록 안에서만 지역 스코프를 갖고 나머지 if문, for문은 지역 스코프를 갖지 않는다.
// 보통 함수선언식은 함수블록안에서만 사용한다.