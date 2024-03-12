let numbers = [];
let inputNumber;
let sum = 0;

while (true) {
    inputNumber = prompt("Enter a number ( Type '/' to stop  OR  click 'ok' to enter next number):");

    if (inputNumber === '/') {
        break;
    }else{
        let userNumber = parseFloat(inputNumber);
        numbers.push(userNumber);
    }
}

function evenSum(array) {
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (num%2 == 0) {
            sum += num
        } 
    }
    alert('Sum of the even numbers are: '+ sum)
}

evenSum(numbers)
