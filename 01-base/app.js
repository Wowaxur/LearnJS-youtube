let num = 42
let firstName = 'Vlad'
const isProgrammer = true

/*Can Do

let $ = 'test'
let $num = 42
let num$ = 42
let _num =12
let _ = 12
let first_name = 'Daria' //pascal case
let num1= 22
*/


/*Restricted
 let my-num =123
let false = 12
 let let = 12*/


/*
let num2 = num +23
console.log(num, num2)
num = num2 - num
console.log(num, num2)


let num3 = (num + 10 * 5) / 2
console.log(num3)*/

/*
const fullName = firstName + ' Vakula'
const fullName = firstName + ' ' + 'Vakula'
console.log(fullName)
*/


const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitButton = document.getElementById('submit')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const multiplyButton = document.getElementById('multiply')
const divideButton = document.getElementById('divide')
const clearButton = document.getElementById('clear')
let action = '+'


const printResult = (result) => {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

plusButton.onclick = () => {
    action = '+'
}
minusButton.onclick = () => {
    action = '-'
}
multiplyButton.onclick = () => {
    action = '*'
}
divideButton.onclick = () => {
    action = '/'
}


const computeNumbersWithAction = (inp1, inp2, actionSymbol) => {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    /* if (actionSymbol === '+') {
         return num1 + num2
     }
      else if (actionSymbol === '-') {
         return num1 - num2
     }
      else if (actionSymbol === '*') {
         return num1 * num2
     }
      else if (actionSymbol === '/') {
         return num1 / num2
     }*/
    return (actionSymbol === '+') ? num1 + num2
        : (actionSymbol === '-') ? num1 - num2
            : (actionSymbol === '*') ? num1 * num2
                : num1 / num2
}
clearButton.onclick = () => {
    return printResult('0')
}
submitButton.onclick = () => {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
    /* if (action === '+') {
         const sum = Number(input1.value) + Number(input2.value)
         printResult(sum)
     } else if (action === '-') {
         const sum = Number(input1.value) - Number(input2.value)
         printResult(sum)
     }*/


}

