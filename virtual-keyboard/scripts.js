import Keybord from './src/keyboard.js';

const contentWrapper = document.body.querySelector('.wrapper');
const showHideKeyboardCheckbox = document.querySelector('#show_hide');
const showHideKeyboardBtn = document.body.querySelector('.btn-show-hide');

const generateShowHideKeyboardContentAndValue = () => {
  showHideKeyboardCheckbox.type = 'checkbox';
  showHideKeyboardCheckbox.id = 'show_hide';

  if (localStorage.getItem('keyboardDisplayState') === 'displayed') {
    showHideKeyboardBtn.textContent = 'Hide keyboard';
    showHideKeyboardCheckbox.checked = true;
  } else {
    showHideKeyboardBtn.textContent = 'Show keyboard';
    showHideKeyboardCheckbox.checked = false;
  }
};

generateShowHideKeyboardContentAndValue();

function showHideKeyboard() {
  if (showHideKeyboardCheckbox.checked) {
    localStorage.keyboardDisplayState = 'hide';
    showHideKeyboardCheckbox.checked = false;
    showHideKeyboardBtn.textContent = 'Show keyboard';
  } else {
    localStorage.keyboardDisplayState = 'displayed';
    showHideKeyboardCheckbox.checked = true;
    keyboard.isDisplayed = true;
    showHideKeyboardBtn.textContent = 'Hide keyboard';
  }
}

const keyboard = new Keybord();
keyboard.applyKeyboardLanguage();

showHideKeyboardBtn.addEventListener('click', showHideKeyboard);

const capsLockKey = document.querySelector('[data-which="20"]');
keyboard.toggleCapsLockModifier(capsLockKey, contentWrapper);

const leftShiftKey = document.querySelectorAll('[data-which="16"]')[0];
const rightShiftKey = document.querySelectorAll('[data-which="16"]')[1];
keyboard.toggleShiftModifier(leftShiftKey, contentWrapper);
keyboard.toggleShiftModifier(rightShiftKey, contentWrapper);

keyboard.switchKeyboardLanguage();
keyboard.switchKeyboardLanguageUsingVirtualBtn();
keyboard.addHandlerForAdditionalVirtualKeys();

keyboard.addHandlerForPhysicalKeys();
keyboard.addHandlerForVirtualKeys();

keyboard.appendBtnSoundsOnPage();
