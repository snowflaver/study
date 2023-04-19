// 머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다. 
// 그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다. 문
// 자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
// 모스부호는 다음과 같습니다.

const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
//여기에 key : value 로 값이 주어져잇어서 이거 쓰면 될거 같은데요

function solution(letter) {
    var answer = '';
    // 그럼 문제 답안 제출할때도 안에 잇어야하잖아요 이미 문제에 쓰인다고 지정해준걸요?
    // key : vlaue 이니깐 먼저 key를 뭐라고 부를지 정해야죠 그럼 key를 부르면 아 무슨값이구나 하고 반환하는거죠
    let str = letter.split(' ').map((a) => morse[a]).join('')
    answer = str
    
    return answer;
}
// 
let str = letter.split(" ");
    let {key, value} = morse;
    answer = str.map((a) => morse[a]).join('');
    
// 되시나요...?
// 전 테스트 케이스도 통과 안되네요 ㅋㅋㅋㅋ

solution(".... . .-.. .-.. ---")    // "hello"
solution(".--. -.-- - .... --- -.") // "python"

//정말 무식한 방법으로 해보고싶은 문제네요 ㅠㅠㅠ
let str = letter.split(" ");

answer = str.map((a) => {
    morse[a]
})
.join('')