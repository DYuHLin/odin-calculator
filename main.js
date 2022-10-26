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
    currentOperand.innerText = answer;
};

function subtract(previousNumber, currentNumber){
    answer = currentNumber - previousNumber;
    currentOperand.innerText = answer;
};

function multiply(previousNumber, currentNumber){
    answer = previousNumber * currentNumber;
    currentOperand.innerText = answer;
};

function divide(previousNumber, currentNumber){
    answer = currentNumber / previousNumber;
    currentOperand.innerText = answer;

    if(previousNumber === 0 || currentNumber === 0){
        alert("You cannot divide with a 0")
        currentNumber = "";
        previousNumber = "";
        operand = undefined;
        answer = "";
        currentOperand.innerText = "";
        previousOperand.innerText = "";
    };
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
        case "×":
            multiply(previousNumber, currentNumber);
            break;
        case "÷":
            divide(previousNumber, currentNumber);
            break;
    }
}

//this function and event listeners are meant to show the numbers on the display
function show(num){
    console.log(num)
    currentNumber += num;
    currentOperand.innerText = currentNumber;
    if(currentNumber.includes(".")) {
        document.getElementById("decimal").disabled = true;
    };
}

numbers.forEach(num => {
    num.addEventListener('click', () => {
        show(num.textContent);
    });
});

//adds the operand and makes the current number the previous number, also puts into the previous 
//display
operands.forEach(opr => {
    opr.addEventListener('click', () => {
        console.log(opr.textContent)
        operand = opr.textContent;
        previousNumber = currentNumber;
        previousOperand.innerText = previousNumber + operand;
        currentNumber = "";
        currentOperand.innerText = "";
        document.getElementById("decimal").disabled = false;
    });
});


//for backspacing the current number
deleteBtn.addEventListener('click', () => {
    console.log(currentNumber);
    currentNumber = currentNumber.toString().slice(0, -1);
    currentOperand.innerText = currentNumber;
});

//for clearing all the numbers and operands from the display and variables
clearBtn.addEventListener('click', () => {
    currentNumber = "";
    previousNumber = "";
    operand = undefined;
    currentOperand.innerText = "";
    previousOperand.innerText = "";
});

//calls the operate function and calculates the numbers 
equals.addEventListener('click', () => {
    currentNumber = parseFloat(currentNumber);
    previousNumber = parseFloat(previousNumber);
    previousOperand.innerText = previousNumber + operand + currentNumber;
    operate(currentNumber, previousNumber, operand);
    currentNumber = answer;

    if(currentNumber === "" || previousNumber === "" || operand === "") {
        alert("You have to input all the required variables and operand to perfom a calulation")
    }
});