// 평균 구하기
// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// 입출력 예
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5

function solution(arr) {
    var answer = 0;
    let a = arr.reduce((x, y) => x + y, 0)  // 정해진 배열안에 있는 정수를 모두 더한다.
    let b = arr.length                      // 평균을 구하기 위해서 배열의 길이를 정한다.
    let c = a / b                           // 모두 더한 값과 배열의 갯수많큼 나눈다.
    // answer = Math.round(c * 100) / 100   // 소수점 2자리까지 반올림할경우
    answer = c                              
    console.log(answer)
}
console.log(solution([1,2,3,4]))
