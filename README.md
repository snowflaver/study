# javascript의 ES린? 그리고 ES5와 ES6의 문법차이

해당 부분을 찾아보면서 어떠한것들이 있는지 몰라서 주어진 명제에대해서 하나씩
조금씩만 알아보려고 햇다.

## javascropt의 ES란?

ES는 ECMAScript의 약어로써 자바스크립트 언어의 표준화를 위한 문서이며
이는 기능 및 동작, 그리고 구문등을 규정한다.

여기서 개발자로써 코드를 작성할 때 이해해야되는 가장 중요한 것들이 있다.

1. 문법 : ES는 구문을 규정하며, 코드작성을 할때 올바른 타입으로 작성토록 도와준다.
2. 데이터 타입 : ES는 데이터 타입을 정의하며, 개발자들이 자바스크립트에서
                사용되는 데이터 타입을 이해하고, 적절한 데이터 타입을 사용하게끔
                코드작성을 도와준다.
3. 실행 컨텍스트 : ES는 실행 컨텍스트를 규정하며, 여기서 실행 컨텍스트란
                  변수와 함수등의 스코프, this, 변수 호이스팅 등의 동작을 제어한다.

함수 스코프 : 변수가 어디에서 유효한지 결정하는 규칙중 하나이며
             함수를 선언하면 해당 함수내에서만 유효하고 이를 사용하면
             함수 외부에서 접근할 수 없다.
예)
```
function hey() {
    let a = 5
    console.log(a)
}

hey() // 5
console.log(a) // ReferenceError: a is not defined
```
이렇게 변수 a는 함수 hey 안에서 선언되었기 떄문에 hey함수 외부에서 접근할수 없다.
hey함수 호출하면 a변수가 유효하기에 5가 출력이 되지만, hey함수 외부에서는
a 변수를 찾을 수 없기에 ReferenceError가 발생한다.

함수 스코프는 변수의 충돌을 방지하고 코드의 가독성을 높여 줄수 잇다.
단, 함수 스코프는 범위가 제한적이며 변수를 전역으로 사용하기에는 전역 스코프를 사용해야 된다.

4. 함수와 호출 : ES는 함수가 동작하는 방식을 규정하며, 개발자들이 함수를 작성하고 호출할 때
                올바른 방식을 작성할 수 있게 도와준다.
5. 객체 : ES는 객체를 규정하며, 객체는 자바스크립트에서 중요한 개념이며
         이를 이해하지 못하면 코드 작성에 어려움을 겪는다.
6. 모듈 : ES는 모듈시스템을 규정하며, 모듈시스템은 자바스크립트 코드를 재사용하고
         구성요소를 쉽게 관리할 수 있도록 도와준다.
7. 에러처리 : ES는 자바스크립트에서 발생할 수 있는 다양한 에러를 규정하고
             개발자들이 코드에서 발생하는 에러를 적절하게 처리할 수 있도록 도와준다.

## ES5

2009년에 출시됫으며, 이전 ES3의 기능에서 객체 리터널, 배열 메소드, strict모드 등의 새로운 기능이 추가되엇다.

### 추가된 기능들
1. 'use strict'모드 : 코드작성시 더 엄격한 문법검사를 적용하고, 명시적인 변수 선언을 강제하는등의 엄격모드로 설명
                     'use strict'는 스크립트 파일이나 함수의 첫 줄에 선언하여 사용한다.
2. JSON객체 : JSON(JavaScript Object Notation)은 자바스크립트 객체를 문자열 형태로 보여주는 방식
             ES5에서 객체를 표준으로 지정햇다.
3. Object 메소드: ES5에서는 Object 객체의 새로운 메소드가 추가되고,
                 Object.keys()는 객체의 모든 키를 배열로 반환하고, Object.create()는 객체를 상속하는 데 사용
4. Array 메소드: ES5에서는 Array 객체의 새로운 메소드가 추가되고,
                 Array.isArray()는 배열인지 아닌지를 판별하고, Array.prototype.forEach()는 배열의 모든 요소에 대해 콜백 함수를 실행

5. Function 메소드: ES5에서는 Function 객체의 새로운 메소드가 추가되고,
                   Function.prototype.bind()는 함수에 바인딩된 새로운 함수를 반환

6. Date 메소드: ES5에서는 Date 객체의 새로운 메소드가 추가되고,
               Date.now()는 현재 시간을 밀리초 단위로 반환하고, Date.prototype.toISOString()는 ISO 8601 형식으로 날짜를 반환

## ES6

2015년에 출시됫으며, 이전 ES5의 기능들을 개선하고, 여러가지 기능들을 추가햇다.

### 추가된 기능들
1. let, const : ES6에서는 var 키워드 외에도 let과 const 키워드가 추가되고, let과 const 키워드를 사용하면 블록 단위 스코프를 사용할 수 있으며,
               const 키워드를 사용하면 변수 값을 변경할 수 없다.
쉽게 생각하면 let은 이전에 사용하던 var에서 진화가 된것이라고 생각하면되고,
const는 var, let에서 선언된 변수가 바뀌어선 안되는 변수를 선언할때 사용한다고 이해하면 된다.

2. 화살표 함수: ES6에서는 화살표 함수라는 새로운 함수 표현식이 추가되고, 화살표 함수를 사용하면 코드의 가독성을 높이고, 간결한 코드를 작성할 수 있다.

3. 클래스: ES6에서는 클래스라는 새로운 객체 생성 방식이 추가되고, 클래스를 사용하면 객체지향적인 코드를 작성하기 쉬워지며,
          상속과 같은 객체 지향적인 개념을 쉽게 구현할 수 있다.

4. 템플릿 리터럴: ES6에서는 백틱(`)을 사용한 템플릿 리터럴이 추가되고, 템플릿 리터럴을 사용하면 문자열을 표현하는 방법이 보다 유연해지며,
                 변수를 삽입하는 등의 기능을 수행할 수 있다.

5. 해체 할당: ES6에서는 배열이나 객체에서 필요한 값을 추출하여 변수에 할당하는 해체 할당 기능이 추가되고, 이를 통해 불필요한 코드를 줄이고, 가독성을 높일 수 있다.

6. 모듈: ES6에서는 모듈 시스템이 추가되어서 개발자들이 모듈화된 코드를 작성할 수 있게 되고,
        모듈화된 코드는 재사용성이 높아지고 유지보수가 쉬워진다고 한다.

7. 나머지 매개변수 및 전개 연산자: ES6에서는 함수의 매개변수를 ...args와 같이 나머지 매개변수로 정의하고, 전개 연산자 ...을 사용하여 매개변수를 전달할 수 있다.
                                 이를 통해 코드의 가독성과 유연성을 높일 수 있다고 한다.

## ES5와 ES6의 문법차이

1. 변수 선언 방식
ES5에서는 변수를 선언할 때 var 키워드를 사용했엇다. ES6에서는 let과 const 키워드를 사용하고, let과 const는 블록 범위(block scope)를 가지며,
var보다 더 정확한 변수의 유효 범위를 제공

2. 함수 선언 방식
ES5에서는 함수를 선언할 때 function 키워드를 사용했습니다. ES6에서는 화살표 함수(Arrow function)를 사용할 수 있다. 
화살표 함수는 더 간결하게 함수를 작성할 수 있게 도와준다.
예)
```
// 일반 함수
function add(a, b) {
  return a + b
}

// 화살표 함수
const add = (a, b) => {
  return a + b
}
```

3. Template literals
ES5에서는 문자열을 작은따옴표(')나 큰따옴표(")로 감쌌고, ES6에서는 백틱(backtick) 기호(`)를 사용하여 문자열을 감싸는 템플릿 리터럴(Template literals) 문법을 제공
템플릿 리터럴을 사용하면 문자열 안에 변수나 표현식을 삽입할 수 있다.
예)
```
const name = "철수";
console.log(`내 이름은 ${name}.`)
```
위의 코드를 실행하면 "내 이름은 철수"로 출력이 된다.

4. 객체 리터럴
ES5에서는 객체를 리터럴로 작성할 때 중괄호({}) 안에 속성을 나열했지만 ES6에서는 객체 리터럴을 간단하게 작성할 수 있는 문법을 제공
예)
```
// ES5
var person = { name: "철이", age: 43 }

// ES6
const person = { name, age }
```
위의 코드에서는 ES6에서 추가된 단축 속성명(Shorthand property names) 문법을 사용하여 객체를 작성

5. Destructuring
ES6에서는 객체나 배열의 값을 추출하여 변수에 할당하는 #Destructuring 문법을 제공하고
이를 통해 코드를 더 간결하고 가독성 좋게 작성할 수 있게 도와준다.
예)
```
const person = { name: "영수", age: 18 }
const { name, age } = person
console.log(name) // "영수"
console.log(age) // 18
```

6. 클래스
ES6에서는 클래스(Class) 문법을 도입하여 객체 지향 프로그래밍을 더 쉽게 작성할 수 있도록 도와준다.
클래스를 사용하면 생성자 함수, 프로토타입, 상속 등을 더 쉽게 작성할 수 있다.

### Destructuring 문법

1. 객체 Destructuring 예시
```
const person = {
  name: "영희",
  age: 24,
  address: {
    city: "서울",
    country: "대한민국"
  }
}

// 객체에서 속성 추출
const {name, age} = person

// 중첩된 객체에서 속성 추출
const {city, country} = person.address

console.log(name) // "영희"
console.log(age) // 24
console.log(city) // "서울"
console.log(country) // "대한민국"
```
위의 코드에서는 const {name, age} = person; 부분에서 person 객체에서 name과 age 속성을 추출하여 각각의 변수에 할당하고
이를 통해 person.name, person.age와 같이 객체의 속성을 반복하지 않고도 각각의 변수에 접근할 수 있다.

2. 배열 Destructuring 예
```
const numbers = [1, 2, 3, 4, 5]

// 배열에서 값 추출
const [first, second, third] = numbers

console.log(first) // 1
console.log(second) // 2
console.log(third) // 3
```
위의 코드에서는 const [first, second, third] = numbers; 부분에서 배열 numbers에서 첫 번째, 두 번째, 세 번째 값들을 추출하여 각각의 변수에 할당하고
이를 통해 numbers[0], numbers[1], numbers[2]와 같이 배열의 인덱스를 반복하지 않고도 각각의 변수에 접근할 수 있다.

Destructuring을 사용하면 객체나 배열에서 필요한 값을 추출하여 변수에 할당하는 것이 가능해진다.
이를 통해 코드를 더 간결하고 가독성 좋게 작성할 수 있다.

# 느낀점??
이렇게 여기까지 알아보는데 지금까지 이해가 되지않은 부분을 구글링하고 검색하면서 조금씩 머릿속으로 이해가 되기 시작해서 기분은 좋앗다.
하지만 이건 어디까지나 단편적인 부분이라 눈앞이 조금 깜깜하기는 하지만 시간을 들여서 조금씩 아니면 한조각씩 공부해나가면 어느순간 나도
이런것들을 쉽게 설명할수있는 날이 오기를 기대하게 된다.

앞으로도 여유시간이되면 자바스크립트의 Deepdark 한부분까지 조금씩 알아보려고 한다.