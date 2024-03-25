//DOM DECLARATIONS
const calDisplay = document.querySelector("#calc-display");
const clearBtn = document.querySelector("#clear");
const numBtns = document.querySelectorAll(".num");
let noInputs = true;
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
  calDisplay.textContent += event.target.value;
}
//EVENT LISTENERS
clearBtn.addEventListener("click", clearDisplay);

numBtns.forEach((btn) => {
  btn.addEventListener("click", numPressed);
});
