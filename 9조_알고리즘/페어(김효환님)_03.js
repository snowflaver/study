// 가운데 글자 가져오기
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

function solution(s) {
    var answer = '';
    // s.length를 사용해서 문자열 길이를 계산한다.
    let a = parseInt(s.length / 2)  // 문자열을 parseInt를 사용해서 문자열 중앙위치를 계산한다.
    if (s.length % 2 === 0) {       // 문자열 길이가 짝수일때
        for (let i = a - 1; i <= a; i++) {  // 짝수일때 중앙 2글자 추출하기 위해서 a-1 부터 a까지 반목하면서 문자열 추출
            answer += s[i]                  
        }
    } else {                                // 홀수일때 중앙 1글자 추출
        answer = s[a]
    }
    console.log(answer) //최종적으로 중앙에 위치한 문자 1개 혹은 2개가 저장되고 변수가 출력이 된다.
}

console.log(solution("abde"))