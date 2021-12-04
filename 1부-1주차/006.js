// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**

// 1)  NaN
// 2)  1
// 3)  ""
// 4)  0
// 5)  undefined

//2번
//객체의 초기값이 false인 경우
// * 값이 없음
// * 0
// * -0
// * null
// * NaN
// * undefined
// * "" 빈문자열

//조건문에서 false인 경우
// * undefined
// * null
// * 예시) 
    var x = new Boolean(false);
    if (x) {
      // 이 코드는 실행됨
    }

// 비교연산자 중 '동등연산자(==)'
// * 정의: 비교하는 두 값이 일치하면 true, 일치하지 않으면 true
// 동등연산자(==) != 일치연산자(===)
// 일치연산자는 type까지 동일할 때 true값을 반환

NaN == true;
//false
1 == true;
//true;
0 == true;
//false
"" == true;
//false
undefined == true;
//false