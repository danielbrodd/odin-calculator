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
    document.querySelectorAll('.button').forEach(button => {
      button.classList.remove('click');
    });
    
    this.classList.add('click');
    setTimeout(() => {
        this.classList.remove('click');
    }, "50")
  }
  document.querySelectorAll('.button').forEach(button => {
    button.onclick = buttonClicked;
  });

//number buttons adds number value

const numberButtons = document.querySelectorAll('.numbers');

numberButtons.forEach(item => {
    item.addEventListener('click', () => {
        if(display.textContent.length >= 6){
            display.textContent = ' ERROR';
        }else {
        
        display.textContent +=item.textContent 
        }
    } )
} )

