import { enKeysLayout } from './src/data.js';
import Key from './src/key.js';

function generateBodyElements() {
  const generateWrapper = () => {
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'wrapper';
    document.body.append(contentWrapper);
  };

  generateWrapper();
  const wrapper = document.body.querySelector('.wrapper');

  const generateHeader = () => {
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    const titleText = document.createTextNode('Virtual Keyboard');

    header.className = 'header';
    wrapper.append(header);
    header.appendChild(headerTitle);
    headerTitle.appendChild(titleText);
  };
  generateHeader();

  const generateTextarea = () => {
    const textarea = document.createElement('textarea');

    textarea.className = 'textarea';
    textarea.setAttribute('rows', '10');
    wrapper.append(textarea);
  };
  generateTextarea();

  const generateKeyboard = () => {
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    wrapper.append(keyboard);
    enKeysLayout.forEach((row) => {
      const keyboardRow = document.createElement('div');
      keyboardRow.className = 'keyboard__row';
      row.forEach((keyData) => {
        const key = new Key(keyData);
        const button = key.generateKey();
        keyboardRow.append(button);
      });
      keyboard.append(keyboardRow);
    });
  };

  generateKeyboard();
}
generateBodyElements();

function addCLickKeyHandler() {
  const keys = document.querySelectorAll('.keyboard__key');

  keys.forEach((el) => {
    el.addEventListener('mousedown', (event) => {
      event.target.classList.add('clicked');
      setTimeout(() => event.target.classList.remove('clicked'), 250);
    });
  });
}
addCLickKeyHandler();
