//#003번 변수의 타입
//다음 출력 값으로 올바른 것은?
// 1)  undefined
// 2)  string
// 3)  number
// 4)  object --> 체크 

var arr = [100, 200, 300];
console.log(typeof(arr));

// number가 나오게 하려면?(배열의 원소의 타입)
var arr1 = [100, 200, 300];
console.log(typeof(arr[0]));

// 배열 원소 전체의 타입과 개수
let number =0;
let string =0;
let arr = ['가','나',100, 200, 300];
for(let i=0; i<arr.length; i++){
    if (typeof(arr[i])==='number'){
        number+=1;
    }
    else{
        string+=1;
    }
}
console.log(`arr는 number 타입 ${number}개와 string 타입 ${string}의 원소들을 가지고 있습니다.`);