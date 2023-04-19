// 😃 **1번 문제) 잔돈을 구해보자! (1점)**


// 😃 설명) 르탄이가 1000원을 가지고 편의점에서 물건을 사려고 한다. 

// 편의점에는 500원, 100원, 50원, 10원이 충분히 있고, 편의점 직원은 언제나 거스름돈 개수가 가장 적게 잔돈을 준다. 

// 르탄이가 편의점에서 물건을 사고 1000원 지폐 한 장을 냈을 때, 받을 잔돈의 개수를 구하는 프로그램을 작성하여라. 
// (단, 물건의 가격은 10원 이상 1000원 미만이며, 1원 단위는 고려하지 않는다.)

// 입출력 예
// checkin     result
// 900         1
// 550         5
// 320         6

function solution(num, base) {
    let answer = 0;
    let seedmoney = base     // 가지고 잇는돈
    let big = 500       // 500원
    let middle = 100    // 100원
    let small = 50      // 50원
    let smaller = 10    // 10원
    let money = seedmoney - num      // 거스름 돈

    // 500원의 갯수
    answer += Math.floor(money / big)
    // 500원의 갯수만큼 뺴고 남은 돈
    console.log(answer)
    money %= big
    // 100원의 갯수
    answer += Math.floor(money / middle)
    console.log(answer)
    // 100원의 갯수만큼 빼고 남은 돈
    money %= middle
    // 50원의 갯수
    answer += Math.floor(money / small)
    console.log(answer)
    // 50원의 갯수만큼 뺴고 남은 돈
    money %= small
    // 10원의 갯수
    answer += Math.floor(money / smaller)
    console.log(answer)
    // 10원의 갯수만큼 빼고 남은 돈
    money %= smaller
    // 거스름 돈의 동전 갯수
    return answer;
}
let num1 = 160; // 500 : 1, 100 : 3, 50 : 0, 10 : 4 = 8
console.log(solution(num1, 1000))

// 해설
// 1. 편의점에서 사용하는 거스름돈의 동전 종류를 먼저 정해주엇다.
// 2. 정해진 동전 종류별로 가장 적은 갯수의 동전을 사용해서 거스름돈을 걸러줘야 햇기에
// 3. 제일 큰 동전인 500원 짜리 동전을 먼저 몇 개를 줘야하는지 찾기위해서
//   나누기 연산자를 사용하여 발생하는 소수점이하는 버려주는 메서드 Math.floor를 사용하여
//   500원 동전의 갯수를 찾아내서 거스름 돈의 동전 갯수를 반환해야할 answer에 더해주고
//   500원 동전의 갯수만큼 뺸 나머지연산자를 사용하여 거슬러 줘야할 남은 거스름돈의 양을
//   계산 해주엇다.
// 4. 남은 거스름돈의 양에서 그다음 작은 동전인 100원 짜리 동전이니깐
//   500원 짜리 동전의 갯수를 찾아주듯 남은 거스름돈의 money를 나누기 연산자를 사용하여
//   100원 짜리 동전의 갯수를 찾은 다음 똑같이 거슬러 줘야하는 남은 거스름 돈을 나머지 연산자를
//   사용하여 money에 계산햇다.
// 5. 50원 10원 짜리 동전도 위와 같이 구해주고, 최종적으로 answer에 500원, 100원, 50원, 10원에
//   사용된 갯수만큼 더해주면서 최종적으로 최소한은 동전의 갯수인 answer를 반환해주엇다.