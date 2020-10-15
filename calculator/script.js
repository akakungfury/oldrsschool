const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');

const equalsBtn = document.querySelector('[data-equals]');
const allClearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');

const previousOperandTextElem = document.querySelector('[data-previous-operand]');
const currentOperandTextElem = document.querySelector('[data-current-operand]');

class Calculator {
  constructor(previousOperandTextElem, currentOperandTextElem){
    this.previousOperandTextElem = previousOperandTextElem;
    this.currentOperandTextElem = currentOperandTextElem;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = '';
    this.isCurrentOperandImmutable = false;
  }

  delete() {}

  appendNumber(number) {
    if(number === '.' && this.currentOperand.includes('.')) return;

    this.isCurrentOperandImmutable ? this.currentOperand = number: this.currentOperand = this.currentOperand + number;
  }

  choseOperation(operation) {
    if(operation.toLowerCase() === 'xn') operation = '^';

    if(this.currentOperand === '') return;
    if(this.previousOperand !== '') {
      this.compute();
    }

    this.isCurrentOperandImmutable = false;
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = ''
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)

    switch (this.operation) {
      case('+'):
        result = prev + current;
        break;
      case('-'):
        result = prev - current;
        break;
      case('*'):
        result = prev * current;
        break;
      case('÷'):
        result = prev / current;
        break;
      case('^'):
        result = prev ** current;
        break;
      default:
        return;
    }

    this.isCurrentOperandImmutable = true;
    this.currentOperand = result;
    this.previousOperand = '';
    this.operation = '';
  }

  updateDisplay() {
    this.currentOperandTextElem.innerText = this.currentOperand;

    if (this.operation !== '') {
      this.previousOperandTextElem.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandTextElem.innerText = this.previousOperand;
    }
  }
};

let calculator = new Calculator(previousOperandTextElem, currentOperandTextElem);

numberBtns.forEach(btn => {
  btn.addEventListener('click',() => {
    calculator.appendNumber(btn.innerText);
    calculator.updateDisplay();
  })
})

operationBtns.forEach(btn => {
  btn.addEventListener('click',() => {
    calculator.choseOperation(btn.innerText);
    calculator.updateDisplay();
  })
})

allClearBtn.addEventListener('click',() => {
  calculator.clear();
  calculator.updateDisplay();
})

equalsBtn.addEventListener('click',() => {
  calculator.compute();
  calculator.operation = '';
  calculator.updateDisplay();
})
