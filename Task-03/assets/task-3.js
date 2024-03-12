let numbers = [];
let inputNumber;

while (true) {
    inputNumber = prompt("Enter a number ( Type '/' to stop  OR click 'ok' to enter next number):");

    if (inputNumber === '/') {
        break;
    }else{
        let userNumber = parseFloat(inputNumber);
        numbers.push(userNumber);
    }
}

function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array
}


alert(`The entered numbers are : ${numbers}. Click ok to get ascending order`)
const result = sortArray(numbers);
alert('The ascending order is : ' + result)
























