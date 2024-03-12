let userInput = prompt("Enter a number to check:");
let inputNumber = Number(userInput);

function isPerfectSquare(num) {
  let ind = 1;

  while (ind * ind <= num) {
    if (ind * ind === num) {
      return "a Perfect square";
    }

    ind++;
  }

  return "not a Perfect Square";
}


if (isNaN(inputNumber)) {
  alert("Invalid input. Enter a valid number !!!");
} else {
  let result = isPerfectSquare(inputNumber);
  alert(`The number ${inputNumber} is ${result}`);
}