//DOM DECLARATIONS
const calDisplay = document.querySelector("#calc-display");
const clearBtn = document.querySelector("#clear");
const numBtns = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".op");
const equalBtn = document.querySelector("#equal");
let noInputs = true;
let inputNumbers = [];
let inputOp = [];
//FUNCTIONS

//Set the display to zero
function clearDisplay() {
  calDisplay.textContent = 0;
  noInputs = true;
  //clear any inputted numbers
  inputNumbers = [];
  inputOp = [];
}

function numPressed(event) {
  if (noInputs) {
    calDisplay.textContent = "";
    noInputs = false;
  }
  calDisplay.textContent += Number(event.target.value);
}

function opClicked(event) {
  inputOp.push(event.target.value);
  calDisplay.textContent = "";
}

function opClicked(event) {
  let saveContent = new Promise((resolve, reject) => {
    inputNumbers.push(Number(calDisplay.textContent));
    inputOp.push(event.target.value);
    resolve();
  });
  saveContent.then(() => {
    calDisplay.textContent = "";
  });
}

//Iterates through the numbers array and applys the operator from the inputOps array
function calculate(numbers, operators) {
  let total = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    switch (operators[i - 1]) {
      case "+":
        total += numbers[i];
        break;
      case "-":
        total -= numbers[i];
        break;
      case "*":
        total *= numbers[i];
        break;
      case "/":
        total /= numbers[i];
        break;
      default:
        throw new Error(`Invalid operator: ${operators[i - 1]}`);
    }
  }

  return total;
}

function equalClicked() {
  //push last number on the display into the Numbers Input Array
  inputNumbers.push(Number(calDisplay.textContent));
  let result = calculate(inputNumbers, inputOp);
  calDisplay.textContent = result;
  //clear arrays
  inputNumbers = [];
  inputOp = [];
}

//EVENT LISTENERS
clearBtn.addEventListener("click", clearDisplay);

numBtns.forEach((btn) => {
  btn.addEventListener("click", numPressed);
});

opBtns.forEach((op) => {
  op.addEventListener("click", opClicked);
});

equalBtn.addEventListener("click", equalClicked);
