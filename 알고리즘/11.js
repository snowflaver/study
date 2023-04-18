// https://school.programmers.co.kr/learn/courses/30/lessons/120912 << 링크 컨트롤 좌클릭 하시면 됩니다
// 7의 개수
// 문제 설명
// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때,
// 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array의 원소 ≤ 100,000
// 입출력 예
// array	result
// [7, 77, 17]	4
// [10, 29]	0
// 입출력 예 설명
// 입출력 예 #1

// [7, 77, 17]에는 7이 4개 있으므로 4를 return 합니다.
// 입출력 예 #2

// [10, 29]에는 7이 없으므로 0을 return 합니다.

function solution(array) {
    var answer = 0;

    let num = Array.from(String(array), Number) 
    console.log(array)
    for (let i = 0; i<num.length;i++){
        if(num[i] % 10 == 7){
            answer +=1;
        }
    }
    return answer;
} 
console.log(solution([7, 77, 17])) // 여기에 4가 나와야되는데 3이 나올걸요 ㅎ
console.log(solution([10, 29]))
console.log(solution([17, 1 , 8]))
console.log(solution([7, 77, 17, 777, 78974, 74513, 15324, 98456]))

// array.from으로 새로운 배열을 우리는 이미 받앗어요
num.map((digit) => (digit % 10 === 7 ? 1 : 0)).reduce((acc,cur)=> acc+cur, 0) // 여기 리듀스에서 초기값을 정해주면 좋아요