let userInput = Number(prompt("Enter a number:"));

function getDifference(num) {
    if (num > 13) {
        let result = num - 13;
        return result*2
    } else {
        let result = 13 - num;
        return result
    }
}

let difference  = getDifference(userInput);
alert(`The difference between 13 and ${userInput} is = ${difference}`)