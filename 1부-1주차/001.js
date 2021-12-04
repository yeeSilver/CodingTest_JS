//#001번
//다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

//##1번째 방법 - pop()
var nums = [100, 200, 300, 400, 500];
    //의문점) pop()을 연달아 할 경우에는? -> 마지막 제거된 값만 리턴함.
nums.pop();
nums.pop();
//400
console.log(nums);
//[100,200,300]

    //의문점) 빈 배열에 pop()을 할 경우에는?
nums.pop();
nums.pop();
nums.pop();
nums.pop();
//undefined

//정리) Array.prototype.pop() 마지막 요소를 1)제거한 뒤 2)반환함. 

//##2번째 방법 - 배열 length 지정 
var nums = [100, 200, 300, 400, 500];
nums.length = 3;
console.log(nums);

// ##3번째 방법 - 인덱스 값으로 삭제 splice(a,b) array[a]에서부터 b개 제거
var nums = [100, 200, 300, 400, 500];
nums.splice(3,2);
//[400, 500] 제거된 값은 리턴
console.log(nums);
//[100,200,300]

//splice 메서드 정리 array.splice(요소가 추가될 인덱스, 제거 개수, 추가할 원소)
//https://www.notion.so/Array-Array-prototype-a882c2cad6a04c41ad65a3ca1da2bcd3