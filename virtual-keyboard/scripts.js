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
    enKeysLayout.forEach((row, i) => {
      const keyboardRow = document.createElement('div');
      keyboardRow.className = 'keyboard__row';
      keyboardRow.id = `row_${i + 1}`;
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

function addAnimationForKey(el) {
  el.classList.add('clicked');
  setTimeout(() => el.classList.remove('clicked'), 250);
}

function editTextIntoTextarea(key, keyWhich = undefined) {
  let which = keyWhich;
  if (which === undefined) {
    which = key.getAttribute('data-which');
  }
  const keyboardRowId = key.parentElement.id;
  const rowNumber = keyboardRowId.split('_')[1];
  const keyValue = enKeysLayout[rowNumber - 1].find((el) => el.eWhich == which).eKey;

  document.querySelector('textarea').value += keyValue.toString();
}

function addCLickKeyHandler() {
  const keys = document.querySelectorAll('.keyboard__key');

  keys.forEach((el) => {
    el.addEventListener('mousedown', (event) => {
      const key = event.target;
      addAnimationForKey(key);
      editTextIntoTextarea(key);
    });
  });
}
addCLickKeyHandler();

function addPressKeyHandler() {
  window.addEventListener('keydown', (event) => {
    const { which } = event;
    const key = document.querySelector(`[data-which="${which}"]`);
    addAnimationForKey(key);
    editTextIntoTextarea(key);
  });
}
addPressKeyHandler();
