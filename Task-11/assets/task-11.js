let firstNumber = Number(prompt("Enter first number:"));
let secondNumber = Number(prompt("Enter second number:"));

function checkFifty(num1, num2) {
    let sum = num1 + num2;
    if (num1 === 50 || num2 === 50 || sum === 50) {
        return true;
    } else {
        return false;
    }
}

let result  = checkFifty(firstNumber, secondNumber);
alert(`The output is ${result}`)