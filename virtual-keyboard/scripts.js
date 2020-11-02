import Keybord from './src/keyboard.js';

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
    textarea.setAttribute('rows', '13');
    wrapper.append(textarea);
  };
  generateTextarea();

  const generateDescription = () => {
    const description = document.createElement('div');
    const descriptionText = document.createTextNode('Switch a keyboard: CTRL + ALT');

    description.className = 'description';
    wrapper.append(description);
    description.appendChild(descriptionText);
  };
  generateDescription();
}
generateBodyElements();

const contentWrapper = document.body.querySelector('.wrapper');

const keyboard = new Keybord();
keyboard.generateKeyboard(contentWrapper);

const capsLockKey = document.querySelector('[data-which="20"]');
keyboard.toggleCapsLockModifier(capsLockKey, contentWrapper);

const shiftKey = document.querySelector('[data-which="16"]');
keyboard.toggleShiftModifier(shiftKey, contentWrapper);

keyboard.switchKeyboardLanguage(contentWrapper);

keyboard.addHandlerForPhysicalKeys();
keyboard.addHandlerForVirtualKeys();
