import Key from './key.js';
import { enKeyboardLayout, ruKeyboardLayout, enKeys, ruKeys } from './data.js';

export default class Keybord {
  constructor(shiftPressed = false, capsLockOn = false) {
    this.lang = localStorage.getItem('lang') || 'en';
    this.keyboardLayout = enKeyboardLayout;
    this.shiftPressed = shiftPressed;
    this.capsLockOn = capsLockOn;
    this.keysValues = enKeys;
  }

  generateKeyboard(wrapper) {
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    wrapper.append(keyboard);
    if (this.lang === 'en') {
      this.keyboardLayout = enKeyboardLayout;
      this.keysValues = enKeys;
    } else {
      this.keyboardLayout = ruKeyboardLayout;
      this.keysValues = ruKeys;
    }
    this.keyboardLayout.forEach((row, i) => {
      const keyboardRow = document.createElement('div');
      keyboardRow.className = 'keyboard__row';
      row.forEach((keyData) => {
        const key = new Key(keyData);
        const button = key.generateKey();
        keyboardRow.append(button);
      });
      keyboard.append(keyboardRow);
    });
  }

  toggleCapsLockModifier(button) {
    // handler for virtual "CapsLock" btn
    button.addEventListener('mousedown', () => {
      if (!this.capsLockOn) {
        this.capsLockOn = true;
        this.switchKeyboardLayout('caps');
      } else {
        this.capsLockOn = false;
        this.switchKeyboardLayout('caps');
      }
    });

    // handler for physical "CapsLock" btn
    window.addEventListener('keydown', (event) => {
      if (event.code === 'CapsLock') {
        event.preventDefault();
        this.capsLockOn = true;
        this.switchKeyboardLayout('caps');
        // this.addHandlerForPhKeys(this.capsLockOn);
      }
    });
    window.addEventListener('keyup', (event) => {
      if (event.code === 'CapsLock') {
        event.preventDefault();
        this.capsLockOn = false;
        this.switchKeyboardLayout('caps');
        // this.addHandlerForPhKeys(this.capsLockOn);
      }
    });
  }

  toggleShiftModifier(button) {
    // handler for virtual "Shift" btn
    button.addEventListener('mousedown', () => {
      this.shiftPressed = true;
      this.switchKeyboardLayout('shift');
    });
    button.addEventListener('mouseup', () => {
      this.shiftPressed = false;
      this.switchKeyboardLayout('shift');
      // if "CapsLock" is active buttons with letters stay upper case
      if (this.capsLockOn) {
        this.switchKeyboardLayout('caps');
      }
    });

    // handler for physical "Shift" btn
    window.addEventListener('keydown', (event) => {
      if (event.which == 16) {
        event.preventDefault();
        this.shiftPressed = true;
        this.switchKeyboardLayout('shift');
      }
    });
    window.addEventListener('keyup', (event) => {
      if (event.which == 16) {
        event.preventDefault();
        this.shiftPressed = false;
        this.switchKeyboardLayout('shift');
        // if "CapsLock" is active buttons with letters stay upper case
        if (this.capsLockOn) {
          this.switchKeyboardLayout('caps');
        }
      }
    });
  }

  switchKeyboardLanguage() {
    let keysPressed = {
      ctrl: false,
      alt: false
    };

    const checkPressedBtns = () => {
      if (keysPressed.ctrl && keysPressed.alt) {
        if (this.lang === 'en') {
          this.lang = 'ru';
          localStorage.lang = 'ru';
          this.keysValues = ruKeys;
        } else {
          this.lang = 'en';
          localStorage.lang = 'en';
          this.keysValues = enKeys;
        }
        keysPressed.ctrl = false;
        keysPressed.alt = false;
        this.switchKeyboardLayout('lang');
      }
    };

    window.addEventListener('keydown', (eventForShiftBtn) => {
      eventForShiftBtn.preventDefault();
      if (eventForShiftBtn.which === 18) {
        keysPressed.ctrl = true;
        checkPressedBtns();
      }
    });
    window.addEventListener('keyup', (eventForShiftBtn) => {
      eventForShiftBtn.preventDefault();
      if (eventForShiftBtn.which === 18) {
        keysPressed.ctrl = false;
      }
    });
    window.addEventListener('keydown', (eventForCtrlBtn) => {
      eventForCtrlBtn.preventDefault();
      if (eventForCtrlBtn.which === 17) {
        keysPressed.alt = true;
        checkPressedBtns();
      }
    });
    window.addEventListener('keyup', (eventForCtrlBtn) => {
      eventForCtrlBtn.preventDefault();
      if (eventForCtrlBtn.which === 17) {
        keysPressed.alt = false;
      }
    });
  }

  switchKeyboardLayout(modifier) {
    const keyboardLayout = this.keysValues;
    keyboardLayout.forEach((keyData) => {
      switch (true) {
        case modifier === 'caps':
          if (keyData.eCode.includes('Key')) {
            if (this.capsLockOn) {
              document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKeyShift;
            }
            if (!this.capsLockOn) {
              document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKey;
            }
          }
          break;
        case modifier === 'shift':
          if (this.shiftPressed) {
            document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKeyShift;
          }
          if (!this.shiftPressed) {
            document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKey;
          }
          break;
        case modifier === 'lang':
          document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKey;
          break;
        default:
          break;
      }
    });
  }

  modifyTextareaValue(eventCode, keyVal, textarea) {
    switch (eventCode) {
      case 'Backspace':
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        break;
      case 'Tab':
        textarea.value += '\t';
        break;
      case 'Delete':
        textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        break;
      case 'Enter':
        textarea.value += '\n';
        break;
      case 'Space':
        textarea.value += ' ';
        break;
      case 'CapsLock':
      case 'ShiftLeft':
      case 'ShiftRight':
      case 'ControlLeft':
      case 'ControlRight':
      case 'MetaLeft':
      case 'AltLeft':
      case 'AltRight':
        break;
      default:
        textarea.value += keyVal;
        break;
    }
  }

  addHandlerForVirtualKeys() {
    const textarea = document.querySelector('textarea');
    const virtualBtns = document.querySelectorAll('.keyboard__key');

    virtualBtns.forEach((btn) => {
      btn.addEventListener('mousedown', (event) => {
        const which = btn.getAttribute('data-which');
        const keyVal = this.keysValues.find((key) => key.eWhich == which).eKey;
        const keyShiftVal = this.keysValues.find((key) => key.eWhich == which).eKeyShift;
        const keyCode = this.keysValues.find((key) => key.eWhich == which).eCode;

        textarea.blur();
        if (which == '20' && btn.classList.contains('clicked')) {
          btn.classList.remove('clicked');
        } else {
          btn.classList.add('clicked');
          btn.addEventListener('mouseout', () => {
            if (which == '20') {
              return;
            }
            btn.classList.remove('clicked');
          });
        }
        if (this.shiftPressed) {
          this.modifyTextareaValue(keyCode, keyShiftVal, textarea);
        } else if (this.capsLockOn) {
          if (keyCode.includes('Key')) {
            this.modifyTextareaValue(keyCode, keyShiftVal, textarea);
          } else {
            this.modifyTextareaValue(keyCode, keyVal, textarea);
          }
        } else {
          this.modifyTextareaValue(keyCode, keyVal, textarea);
        }
      });
    });

    virtualBtns.forEach((btn) => {
      btn.addEventListener('mouseup', () => {
        const which = btn.getAttribute('data-which');
        if (which == '20') {
          return;
        }
        btn.classList.remove('clicked');
      });
    });
  }

  addHandlerForPhysicalKeys() {
    const textarea = document.querySelector('textarea');
    let virtualBtn;

    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      virtualBtn = document.querySelector(`[data-which="${event.which}"]`);
      virtualBtn.classList.add('clicked');
    });

    window.addEventListener('keyup', (event) => {
      event.preventDefault();
      textarea.blur();
      virtualBtn = document.querySelector(`[data-which="${event.which}"]`);
      virtualBtn.classList.remove('clicked');
      const keyVal = this.keysValues.find((key) => key.eCode === event.code).eKey;
      const keyShiftVal = this.keysValues.find((key) => key.eCode === event.code).eKeyShift;
      if (this.shiftPressed) {
        this.modifyTextareaValue(event.code, keyShiftVal, textarea);
      } else if (this.capsLockOn) {
        if (event.code.includes('Key')) {
          this.modifyTextareaValue(event.code, keyShiftVal, textarea);
        } else {
          this.modifyTextareaValue(event.code, keyVal, textarea);
        }
      } else {
        this.modifyTextareaValue(event.code, keyVal, textarea);
      }
    });
  }
}
