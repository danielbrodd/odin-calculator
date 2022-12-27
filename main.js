//Functions for Math

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply (a,b) {
    return a * b;
};

function divide (a,b) {
    return a / b;
};

function operate(a, operator, b) {
    return operator(a, b);
}

//Wiring buttons
function consLogTest(number) {
    console.log('IT WORKED!')
}

//DISPLAY
const display = document.querySelector('.display')

//button Clear

const clear = document.querySelector('#bClear')
clear.addEventListener('click',() =>{
    display.textContent = ''
})

//button Divide

const bDiv = document.querySelectorAll('#bDiv')

// Numbers buttons clicked

const allNumbers = document.querySelectorAll('.numbers')

function buttonClicked() {
    document.querySelectorAll('.numbers').forEach(button => {
      button.classList.remove('click');
    });
    
    this.classList.add('click');
    setTimeout(() => {
        this.classList.remove('click');
    }, "50")
  }
  document.querySelectorAll('.numbers').forEach(button => {
    button.onclick = buttonClicked;
  });

//Func buttons clicked

function buttonClicked() {
    document.querySelectorAll('.func').forEach(button => {
      button.classList.remove('click');
    });
    
    this.classList.add('click');
    setTimeout(() => {
        this.classList.remove('click');
    }, "50")
  }
  document.querySelectorAll('.func').forEach(button => {
    button.onclick = buttonClicked;
  });


//button 0
const zero = document.querySelector('#bZero');
zero.addEventListener('click', (number) => {
    if(display.textContent.length >= 6){
        display.textContent = '    ERROR';
    }else {
    
    display.textContent +=zero.textContent 
    }
} )
//button 1
const one = document.querySelector('#bOne');
one.addEventListener('click', (number) => {
    
    if(display.textContent.length >= 6){
        display.textContent = '    ERROR';
    }else {
    
    display.textContent +=one.textContent 
    }
    
} )
//button 2
const two = document.querySelector('#bTwo');
two.addEventListener('click', (number) => {
    
    if(display.textContent.length >= 6){
        display.textContent = '    ERROR';
    }else {
    
    display.textContent +=two.textContent 
    }
    
} )
//button 3
const three = document.querySelector('#bThree');
three.addEventListener('click', (number) => {
    
    if(display.textContent.length >= 6){
        display.textContent = '    ERROR';
    }else {
    
    display.textContent +=three.textContent 
    }
    
} )
//button 4
const four = document.querySelector('#bFour');
four.addEventListener('click', (number) => {
    
    if(display.textContent.length >= 6){
        display.textContent = '    ERROR';
    }else {
    
    display.textContent +=four.textContent 
    }
    
    
} )
//button 5
const five = document.querySelector('#bFive');
five.addEventListener('click', (number) => {
    
    if(display.textContent.length >= 6){
        display.textContent = '    ERROR';
    }else {
    
    display.textContent +=five.textContent 
    }
    
    
} )
//button 6
const six = document.querySelector('#bSix');
six.addEventListener('click', (number) => {
    
    if(display.textContent.length >= 6){
        display.textContent = '    ERROR';
    }else {
    
    display.textContent +=six.textContent 
    }
    
    
} )
//button 7
const seven = document.querySelector('#bSeven');
seven.addEventListener('click', (number) => {
    
    if(display.textContent.length >= 6){
        display.textContent = '    ERROR';
    }else {
    
    display.textContent +=seven.textContent 
    }
    
    
} )
//button 8
const eight = document.querySelector('#bEight');
eight.addEventListener('click', (number) => {
    
    if(display.textContent.length >= 6){
        display.textContent = '    ERROR';
    }else {
    
    display.textContent +=eight.textContent 
    }
    
    
} )
//button 9
const nine = document.querySelector('#bNine');
nine.addEventListener('click', (number) => {
    
    if(display.textContent.length >= 6){
        display.textContent = '    ERROR';
    }else {
    
    display.textContent +=nine.textContent 
    }
    
    
} )
