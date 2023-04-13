// 😃 **2번 문제) O/X 덧셈(2점)**

// 😃 설명) "OOXXOXXOOO"와 같은 OX문의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다.
//   문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다.
//   예를 들어, 10번 문제의 점수는 3이 된다.

// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

// (단,  OX문의 결과는 0보다 크고 80보다 작은 문자열이 주어진다. 또한 문자열은 O와 X만으로 이루어져 있다.)

// 입출력           예
// OOXXOXXOOO	    10
// OXOXOXOXOXOXOX	7
// OOOOOOOOOO	    55

function solution(str){
	let answer= 0;  // 점수의 총합
    let count = 0   // 맞춘 횟수의 누적
    // 퀴즈의 문제만큼 반복
    for (let i = 0; i < str.length; i++) {
        // 퀴즈를 맞췃을때
        if (str[i] === 'O') {
            // 맞춘 횟수를 누적시킨다
            count++
            // 누적된 횟수를 총합에 더해준다.
            answer += count
        // 퀴즈를 틀렷을때
        } else {
            // 누적된 횟수를 초기화 시켜준다.
            count = 0
        }
        // console.log(count, answer)
    }
    // 점수를 모두 더한 총합을 반환
	return answer;  // 27
}
let str="OXOOOXXXOXOOXOOOOOXO"; 
console.log(solution(str))