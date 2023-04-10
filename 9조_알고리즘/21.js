// 이상한 문자 만들기
// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
// 입출력 예
// s	                return
// "try hello world"	"TrY HeLlO WoRlD"
// 입출력 예 설명
// "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로,
// 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.

function solution(s) {
    var answer = '';
    let a = s.split(' ')
    for (let word of a) {
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                answer += word[i].toUpperCase()
            } else {
                answer += word[i].toLowerCase()
            }
        }
        answer += ' '
    }
    answer.slice(0, answer.length -1)
    // answer.trimEnd()
    // trimEnd()를 사용하면 뒤에 공백이 있는 단어가 주어졋을때 그 공백마저 지워버리는 문제가 발생한다.
    console.log(answer)
}
console.log(solution("try hello world"))

// -------------------------------------------

function solution(s) {
    const arr = s.split(" ")
    const newArr = arr.map((a) => a.split(""))
    let result = []
    for (i of newArr) {
        result.push(i.map((value, index) =>
            index % 2 === 0 ? value.toUpperCase() : value.toLowerCase()))
    }

    return result.map((a) => a.join("")).join(" ")
}
