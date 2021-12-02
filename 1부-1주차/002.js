//#002번 배열의 내장함수
//<pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

//데이터
var arr = [200, 100, 300];
//<pass>
arr.splice(2,0,10000);
console.log(arr);

// 출력
// [200, 100, 10000, 300]

//splice 메서드 정리 array.splice(요소가 추가될 인덱스, 제거 개수, 추가할 원소)
//splice는 원 배열에 저장됨. (새로운 배열 생성X)
//정리 노션 -> https://www.notion.so/Array-Array-prototype-a882c2cad6a04c41ad65a3ca1da2bcd3
