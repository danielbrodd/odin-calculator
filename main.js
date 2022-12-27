    //Global variables
//––––––––––––––––––––––––––––––––––––––––––––––––––––––//

let a;
let b;
let callOperator;
let clearNumbers = false;
    
    //Wiring buttons
//––––––––––––––––––––––––––––––––––––––––––––––––––––––//
function consLogTest(number) {
    console.log('IT WORKED!')
}

//DISPLAY
const display = document.querySelector('.display')

//button Clear

const clear = document.querySelector('#bClear')
clear.addEventListener('click',() =>{
    display.textContent = '';
    a = undefined;
    b = undefined;
    callOperator = undefined;
    clearNumbers = false;
})

//button Divide

const bDiv = document.querySelector('#bDivide');

bDiv.addEventListener('click', () => {
    
    if (!b && !a) {
        clearNumbers = true;
        a = display.textContent;
        callOperator = divide;
    }else {
    clearNumbers = true;
    b = display.textContent;
    setTimeout(() => {
        display.textContent = operate(a,callOperator,b);
    }, 0); }
    setTimeout(() => {
        a = display.textContent;
        callOperator = divide;
    }, 10); 
}
)

//button Multiply

const bMultiply = document.querySelector('#bMultiply')

bMultiply.addEventListener('click', () => {
    
    if (!b && !a) {
        clearNumbers = true;
        a = display.textContent;
        callOperator = multiply;
    }else {
    clearNumbers = true;
    b = display.textContent;
    
    setTimeout(() => {
        display.textContent = operate(a,callOperator,b);
    }, 0); }
    setTimeout(() => {
        a = display.textContent;
        callOperator = multiply;
    }, 10); 
}
)
//button Subtract

const bSub = document.querySelector('#bSub')

bSub.addEventListener('click', () => {
    
    if (!b && !a) {
        clearNumbers = true;
        a = display.textContent
        callOperator = subtract;
    }else {
    clearNumbers = true;
    b = display.textContent;
    setTimeout(() => {
        display.textContent = operate(a,callOperator,b);
    }, 0); }
    setTimeout(() => {
        a = display.textContent;
        callOperator = subtract;
    }, 10); 
}
)
//button Add

const bAdd = document.querySelector('#bAdd')

bAdd.addEventListener('click', () => {
    if (!b && !a) {
        clearNumbers = true;
        a = display.textContent
        callOperator = add;
    }else {
        b = display.textContent;
        clearNumbers = true;
        setTimeout(() => {
            display.textContent = operate(a,callOperator,b);
        }, 0); }
        setTimeout(() => {
            a = display.textContent;
            callOperator = add;
        }, 10); 
    
})
//button Equal

const bEqual = document.querySelector('#bEqual')

bEqual.addEventListener('click', () =>{
   
    b = display.textContent;
    display.textContent = operate(a, callOperator, b);
    callOperator = undefined
    setTimeout(() => {
        a = display.textContent;
        
        b = undefined
    }, 50);})
    

    // buttons clicked
//––––––––––––––––––––––––––––––––––––––––––––––––––––––//
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
//––––––––––––––––––––––––––––––––––––––––––––––––––––––//
const numberButtons = document.querySelectorAll('.numbers');

numberButtons.forEach(item => {
    item.addEventListener('click', () => {
        if(display.textContent.length >= 6){
            display.textContent = ' ERROR';
        }else if (display.textContent == 80085) {
            display.textContent = item.textContent;
        }else if (clearNumbers) {
        display.textContent = item.textContent ;
        clearNumbers = false;
        }else display.textContent += item.textContent;
    } )
} )
    //Functions for Math
//––––––––––––––––––––––––––––––––––––––––––––––––––––––//
function add(a, b) {
    return (a + b).toFixed(2);
};

function subtract(a, b) {
    return (a - b).toFixed(2);
};

function multiply (a,b) {
    return (a * b).toFixed(2);
};

function divide (a,b) {

    return (a / b).toFixed(2);
};

function operate(a, operator, b) {
    return operator(parseFloat(a), parseFloat(b));
}

