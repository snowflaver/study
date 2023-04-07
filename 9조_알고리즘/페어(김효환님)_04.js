// 두 정수 사이의 합
// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.
// 입출력 예
// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12

function solution(a, b) {
    var answer = 0;
    if (a === b) {  // a와 b의 정수가 같은때 a의 정수를 리턴
        return a
    }
    for(let i = Math.min(a, b); i <= Math.max(a,b); i++){   // Math.min(a, b)부터 Math.max(a, b)까지 반복하면서 값을 더한다
        answer += i                                         // Math.min() : 주어진 정수중 가장 작은 값을 리턴, Math.max() : 주어진 정수중 가장 큰 값을 리턴
    }
    console.log(answer)
} 
console.log(solution(5, 3))