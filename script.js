//DOM DECLARATIONS
const calDisplay = document.querySelector("#calc-display")
const clearBtn = document.querySelector("#clear")

//FUNCTIONS

//Set the display to zero
function clearDisplay() {
    calDisplay.textContent=0;
}

//EVENT LISTENERS
clearBtn.addEventListener("click", clearDisplay);