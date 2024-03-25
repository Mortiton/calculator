//DOM DECLARATIONS
const calDisplay = document.querySelector("#calc-display");
const clearBtn = document.querySelector("#clear");
const numBtns = document.querySelectorAll(".num");
const opBtns = document.querySelectorAll(".op")
const equalBtn = document.querySelector("#equal")
let noInputs = true;
let inputNumbers = []
//FUNCTIONS

//Set the display to zero
function clearDisplay() {
  calDisplay.textContent = 0;
  noInputs = true;
  //clear any inputted numbers
  inputNumbers = [];
}

//number event listner
function numPressed(event) {
  if (noInputs) {
    calDisplay.textContent= "";
    noInputs = false;
  }
  calDisplay.textContent += Number(event.target.value);
}

//Saves the content of the calculator display to an array and then clears the display content
function opClicked(){
    let saveContent = new Promise((resolve, reject)=> {
            inputNumbers.push(calDisplay.textContent);
            resolve();
    })
    saveContent.then(()=> {
        calDisplay.textContent ='';
    })
}

//calculation function
//needs two numbers for an input and an operator. 
//Get the numbers from the calDisplay
function calculate(operator) {
    let total = null;
}
//EVENT LISTENERS
clearBtn.addEventListener("click", clearDisplay);

numBtns.forEach((btn) => {
  btn.addEventListener("click", numPressed);
});

opBtns.forEach(op => {
    op.addEventListener("click", opClicked);
})
