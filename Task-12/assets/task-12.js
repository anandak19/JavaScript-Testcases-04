let firstNumber = Number(prompt("Enter first number:"));
let secondNumber = Number(prompt("Enter second number:"));


function checkIntegers(num) {
    if (num < 0){
        return 'negative'
    }else if(num > 0){
        return 'positive'
    }else{
        return 'neither positive or negative';
    }
}

let resultOne = checkIntegers(firstNumber);
let resultTwo = checkIntegers(secondNumber);

alert(`The first number ${firstNumber} is ${resultOne} and second number ${secondNumber} is ${resultTwo}`)