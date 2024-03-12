function generateFibonacci(value) {
    let fibonacciSequence = [0, 1];

    for (let i = 2; i < value; i++) {
        fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    }
    return fibonacciSequence;
}

let endValue = prompt("Enter the desired count for fibonacci Series");
let result = generateFibonacci(endValue);
alert(`The fibonacci numbers upto ${endValue} are : ${result}`)
