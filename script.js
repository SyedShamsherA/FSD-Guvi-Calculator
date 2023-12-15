const display = document.getElementById('display');
let memory = 0;

function addToDisplay(value){
    display.value += value
}

function calculate(){
    try {
       const result = eval(display.value);
       display.value = result; 
    } catch (error) {
        alert('Invalid input');
        display.value = '';
    }
}

document.addEventListener('keydown', function(event){
    const key = event.key;
    const isNumber = /[0-9]/.test(key);

    if(isNumber){
        addToDisplay(key);
    }
    else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%'){
        addToDisplay(`${key}`);
    }
    else{
        alert('Only Numbers are allowed')
    }
});

function clearDisplay() {
    display.value = '';
  }

function addToMemory() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      memory += currentValue;
      localStorage.setItem('calculatorMemory', memory);
    }
  }
  
  function subtractFromMemory() {
    const currentValue = parseFloat(display.value);
    if (!isNaN(currentValue)) {
      memory -= currentValue;
      localStorage.setItem('calculatorMemory', memory);
    }
  }
  
  function clearMemory() {
    memory = 0;
    localStorage.removeItem('calculatorMemory');
  }
  
  window.addEventListener('load', function () {
    const memoryValue = localStorage.getItem('calculatorMemory');
    if (memoryValue !== null) {
      memory = parseFloat(memoryValue);
    }
  });