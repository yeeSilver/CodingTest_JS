// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

**데이터**
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat('/') + month.concat('/') 
+ day.concat(' ')+ hour.concat(':') + minute.concat(':')+second;

//var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);

// **출력**
// 2019/04/26 11:34:27

//concat(): array.prototype.concat()
//인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 만든다.
//array. concat(array)
//array. concat([value])

