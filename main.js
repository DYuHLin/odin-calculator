///imports for the buttons and display
const numbers = document.querySelectorAll('.data-number');
const operands = document.querySelectorAll('.data-operation');
const equals = document.querySelector('.data-equals');
const deleteBtn = document.querySelector('.data-delete');
const clearBtn = document.querySelector('.data-all-clear');
const previousOperand = document.querySelector('.previous');
const currentOperand = document.querySelector('.current');

//variabes to store the numbers
let previousNumber = "";
let currentNumber = "";
let answer = "";
let operand = undefined;

//functions for the operations
function add(previousNumber, currentNumber){
    answer = previousNumber + currentNumber;
};

function subtract(previousNumber, currentNumber){
    answer = previousNumber - currentNumber;
};

function multiply(previousNumber, currentNumber){
    answer = previousNumber * currentNumber;
};

function divide(previousNumber, currentNumber){
    answer = previousNumber / currentNumber;
};

//this function will take the numbers and an operand and call the one of the operation functions
function operate(previousNumber, currentNumber, operand){
    switch(operand){
        case "+":
            add(previousNumber, currentNumber);
            break;
        case "-":
            subtract(previousNumber, currentNumber);
            break;
        case "*":
            multiply(previousNumber, currentNumber);
            break;
        case "/":
            divide(previousNumber, currentNumber);
            break;
    }
}

//this function and event listeners are meant to show the numbers on the display
function show(num){
    console.log(num)
    currentNumber += num;
    currentOperand.innerText = currentNumber;
}

numbers.forEach(num => {
    num.addEventListener('click', () => {
        
        show(num.textContent);
    });
});

operands.forEach(opr => {
    opr.addEventListener('click', () => {
        console.log(opr.textContent)
        operand = opr.textContent
    });
});


//for backspacing the current number
deleteBtn.addEventListener('click', () => {
    console.log(currentNumber);
    currentNumber = currentNumber.toString().slice(0, -1);
    currentOperand.innerText = currentNumber;
});