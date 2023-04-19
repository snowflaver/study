// 2번 문제) O/X 덧셈(2점)

// 😃 설명) "OOXXOXXOOO"와 같은 OX문의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다.
// 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다.
// 예를 들어, 10번 문제의 점수는 3이 된다.

// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

// (단,  OX문의 결과는 0보다 크고 80보다 작은 문자열이 주어진다. 또한 문자열은 O와 X만으로 이루어져 있다.)

// 입출력 예
// checkin         result
// OOXXOXXOOO	    10
// OXOXOXOXOXOXOX	7
// OOOOOOOOOO	    55

function solution(str){
	let answer= 0;
    let count = 0

    for (let i = 0; i < str.length; i++) {
        // i번째 문자가 'O' 일때
        if (str[i] === 'O') {
            // 'O'가 누적된 숫자만큼 증가
            count++
            // 증가된 숫자만큼 answer에 더해준다
            answer += count
        // i번째 문자가 'O'가 아닐때
        } else {
            // 누적된 'O'의 숫자는 초기화
            count = 0
        }
        console.log(count, answer)
    }
    // 지금까지 모두 더한 값을 반환
	return answer;
}
let str="OXOOOXXXOXOOXOOOOOXO"; // 1 + 0 + 1 + 2 + 3 + 0 + 0 + 0 + 1 + 0 + 1 + 2 + 0 + 1 + 2 + 3 + 4 + 5 + 0 + 1 = 27
console.log(solution(str))

// 해설
// 1. 맞춘 퀴즈의 횟수의 누적된 값을 찾기위해 먼저 count라는 변수를 설정해주엇다.
// 2. 이후 ox 퀴즈의 문제만큼 반복해줄 for문을 사용해서 퀴즈의 문제만큼 순회해주엇다.
// 3. 순회 하면서 if else문을 사용을해 조건을 추가해주엇다.
// 4. 먼저 if문의 조건으로 퀴즈를 맞춘 'O'를 만나면 count를 해주면서 이전 순회된 문자가 'O'일때
//   count를 누적시켜준다.
// 5. 누적된 count를 answer에 계속 더해주엇다.
// 6. 계속 문자들을 순회하면서 'O'가 아닌 'X'를 만나면 누적된 count를 0으로 초기화 시켜주엇고
// 7. 이를 for문의 퀴즈의 문제만큼 다돌떄까지 반복해서 마지막으로 모두 더해준 answer값을 반환해주엇다.