const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');

const equalsBtn = document.querySelector('[data-equals]');
const allClearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const changeSignBtn = document.querySelector('[data-change-sign]');

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

  delete() {
    this.currentOperand = this.currentOperand.substring(0, this.currentOperand.length - 1);
  }

  appendNumber(number) {
    if(number === '.' && this.currentOperand.includes('.')) return;

    this.isCurrentOperandImmutable ? this.currentOperand = number : this.currentOperand = this.currentOperand + number;
    this.isCurrentOperandImmutable = false;
  }

  changeSign() {
    if (this.currentOperand.includes('-')) {
      this.currentOperand = this.currentOperand.substring(1);
    } else {
      this.currentOperand = `-${this.currentOperand}`;
    }
  }

  choseOperation(operation) {
    if(operation.toLowerCase() === 'xn') operation = '^';

    if(this.currentOperand === '') return;
    if(this.previousOperand !== '') {
      this.compute();
    }

    this.isCurrentOperandImmutable = false;
    this.operation = operation;
    if (operation === '√') {
      this.compute();
      this.operation = '';
    } else {
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    }
  }

  compute() {
    if (this.currentOperand === '') {
      alert("Don't forget to enter value")
      return;
    }

    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

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
      case('√'):
        if (current < 0) {
          alert('Value should be more then 0!')
          this.currentOperand = '';
          return;
        }
        result = Math.sqrt(current);
        break;
      default:
        return;
    }

    this.isCurrentOperandImmutable = true;
    this.currentOperand = Number(result.toFixed(12));
    if (this.operation !== '√') this.previousOperand = '';
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
    calculator.updateDisplay();
})

changeSignBtn.addEventListener('click',() => {
  calculator.changeSign();
  calculator.updateDisplay();
})

deleteBtn.addEventListener('click',() => {
  calculator.delete();
  calculator.updateDisplay();
})
