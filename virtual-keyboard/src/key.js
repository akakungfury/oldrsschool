export default class Key {
  constructor({
    eWhich, eCode, eKey, eKeyShift,
  }) {
    this.eWhich = eWhich;
    this.eCode = eCode;
    this.eKey = eKey;
    this.eKeyShift = eKeyShift;
  }

  generateKey() {
    const button = document.createElement('div');
    const keyValue = document.createTextNode(`${this.eKey}`);
    button.className = 'keyboard__key';

    button.append(keyValue);
    switch (true) {
      case this.eCode === 'Backspace':
        button.classList.add('keyboard__key-extra-wide');
        break;
      case this.eCode === 'Tab':
      case this.eCode === 'Delete':
      case this.eCode === 'ControlLeft':
      case this.eCode === 'ControlRight':
        button.classList.add('keyboard__key-mid');
        break;
      case this.eCode === 'CapsLock':
      case this.eCode === 'Enter':
      case this.eCode === 'ShiftLeft':
      case this.eCode === 'ShiftRight':
        button.classList.add('keyboard__key-wide');
        break;
      case this.eCode === 'Space':
        button.classList.add('keyboard__key-space-wide');
        break;
      default:
    }

    return button;
  }
}
