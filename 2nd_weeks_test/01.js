// 😃 **1번 문제) 잔돈을 구해보자! (1점)**


// 😃 설명) 르탄이가 1000원을 가지고 편의점에서 물건을 사려고 한다. 

// 편의점에는 500원, 100원, 50원, 10원이 충분히 있고, 편의점 직원은 언제나 거스름돈 개수가 가장 적게 잔돈을 준다. 

// 르탄이가 편의점에서 물건을 사고 1000원 지폐 한 장을 냈을 때, 받을 잔돈의 개수를 구하는 프로그램을 작성하여라. 
// (단, 물건의 가격은 10원 이상 1000원 미만이며, 1원 단위는 고려하지 않는다.)

// 입출력  예
// 900     1
// 550     5
// 320     6

function solution(num, seedmoney){
	let answer= 0;
    // 500원
    const big = 500
    // 100원
    const middle = 100
    // 50원
    const small = 50
    // 10원
    const smaller = 10
    // 거슬러 줘야 할 돈
    let money = seedmoney - num

    // 500원 갯수
    answer += Math.floor(money / big)
    // 500원 갯수만큼 빼고 거슬러 줘야 할 돈
    money %= big
    // 100원 갯수
    answer += Math.floor(money / middle)
    // 100원의 갯수만큼 빼고 거슬러 줘야 할 돈
    money %= middle
    // 50원 갯수
    answer += Math.floor(money / small)
    // 50원의 갯수만큼 제하고 거슬러 줘야 할 돈
    money %= small
    // 10원 갯수
    answer += Math.floor(money / smaller)
    // 10원의 갯수만큼 제하고 거슬러 줘야 할 돈
    money %= smaller
    // 모든 동전의 총 갯수
	return answer; // 8
}
let num1 = 160;
console.log(solution(num1, 1000))