let inputOne = prompt("Enter the first number:")
let inputTwo = prompt("Enter the second number:")
let firstNum = Number(inputOne)
let secondtNum = Number(inputTwo)
let sum = 0;

function addNumber(num1, num2) {
    if (num1 === num2) {
        let result = num1 + num2;
        return result*3;
    } else {
        let result = num1 + num2;
        return result;
    }
}


if (isNaN(firstNum) || isNaN(secondtNum)) {
    alert("Please enter valid inputs")
} else {
    sum = addNumber(firstNum, secondtNum)
    alert(`The sum of ${firstNum} and ${secondtNum} is: ${sum}`)
}