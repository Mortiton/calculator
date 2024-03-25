//DOM DECLARATIONS
const calDisplay = document.querySelector("#calc-display");
const clearBtn = document.querySelector("#clear");
const numBtns = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".op")
let noInputs = true;
let firstNumber = null;
let secondNumber = null;
//FUNCTIONS

//Set the display to zero
function clearDisplay() {
  calDisplay.textContent = 0;
  noInputs = true;
}

//number event listner
function numPressed(event) {
  if (noInputs) {
    calDisplay.textContent= "";
    noInputs = false;
  }
  calDisplay.textContent += Number(event.target.value);
}

//calculation function
//needs two numbers for an input and an operator. 
//Get the numbers from the calDisplay
function calculate(operator) {
}
//EVENT LISTENERS
clearBtn.addEventListener("click", clearDisplay);

numBtns.forEach((btn) => {
  btn.addEventListener("click", numPressed);
});
