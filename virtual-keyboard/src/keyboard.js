import Key from './key.js';
import { enKeyboardLayout, ruKeyboardLayout, enKeys, ruKeys } from './data.js';

export default class Keybord {
  constructor(shiftPressed = false, capsLockOn = false) {
    this.isDisplayed = localStorage.getItem('keyboardDisplayState') || 'hide';
    this.lang = localStorage.getItem('lang') || 'en';
    this.shiftPressed = shiftPressed;
    this.capsLockOn = capsLockOn;
    this.keysValues;
    this.isVoiceEnteringOn = false;
  }

  applyKeyboardLanguage() {
    if (this.lang === 'en') {
      this.keysValues = enKeys;
    } else {
      this.keysValues = ruKeys;
    }
    this.switchKeyboardLayout('lang');
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
      }
    });
    window.addEventListener('keyup', (event) => {
      if (event.code === 'CapsLock') {
        event.preventDefault();
        this.capsLockOn = false;
        this.switchKeyboardLayout('caps');
      }
    });
  }

  toggleShiftModifier(button) {
    button.addEventListener('click', () => {
      if (this.shiftPressed) {
        this.shiftPressed = false;
        this.switchKeyboardLayout('shift');
      } else {
        this.shiftPressed = true;
        this.switchKeyboardLayout('shift');
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

  switchKeyboardLanguage(e) {
    let keysPressed = {
      ctrl: false,
      alt: false,
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
        document.querySelector('[data-additional-which="switchLanguage"]').querySelector('div').textContent = this.lang;
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

  switchKeyboardLanguageUsingVirtualBtn() {
    document.querySelector('[data-additional-which="switchLanguage"]').addEventListener('click', (e) => {
      if (this.lang === 'en') {
        this.lang = 'ru';
        localStorage.lang = 'ru';
        this.keysValues = ruKeys;
      } else {
        this.lang = 'en';
        localStorage.lang = 'en';
        this.keysValues = enKeys;
      }
      e.target.querySelector('div').textContent = this.lang;
      this.switchKeyboardLayout('lang');
    });
  }

  switchKeyboardLayout(modifier) {
    const keyboardLayout = this.keysValues;
    keyboardLayout.forEach((keyData) => {
      switch (true) {
        case modifier === 'caps': {
          /* this array need for additional check: for which key need change displayed value
          if 'Caps' is activated for russian language */
          const arr = ['Backquote', 'BracketLeft', 'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period'];
          if (keyData.eCode.includes('Key') || (this.lang === 'ru' && arr.includes(keyData.eCode) === true)) {
            if (this.capsLockOn) {
              document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKeyShift;
            }
            if (!this.capsLockOn) {
              document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKey;
              if (this.lang === 'ru' && arr.includes(keyData.eCode) === true) {
                document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKey;
              }
            }
          }
          break;
        }
        case modifier === 'shift':
          if (this.shiftPressed) {
            document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKeyShift;
            if (this.capsLockOn) {
              const arr = ['Backquote', 'BracketLeft', 'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period'];
              if (keyData.eCode.includes('Key') || (this.lang === 'ru' && arr.includes(keyData.eCode) === true)) {
                document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKey;
                if (this.lang === 'ru' && arr.includes(keyData.eCode) === true) {
                  document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKey;
                }
              }
            }
          }
          if (!this.shiftPressed) {
            document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKey;
            if (this.capsLockOn) {
              const arr = ['Backquote', 'BracketLeft', 'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period'];
              if (keyData.eCode.includes('Key') || (this.lang === 'ru' && arr.includes(keyData.eCode) === true)) {
                document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKeyShift;
                if (this.lang === 'ru' && arr.includes(keyData.eCode) === true) {
                  document.querySelector(`[data-which="${keyData.eWhich}"]`).firstChild.nodeValue = keyData.eKeyShift;
                }
              }
            }
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
        } else if (which == '16' && btn.classList.contains('clicked')) {
          btn.classList.remove('clicked');
        } else {
          btn.classList.add('clicked');
          btn.addEventListener('mouseout', () => {
            switch (true) {
              case which == '20':
              case which == '16':
                break;
              default:
                btn.classList.remove('clicked');
            }
          });
        }
        if (this.shiftPressed) {
          this.modifyTextareaValue(keyCode, keyShiftVal, textarea);
        } else if (this.capsLockOn) {
          /* this array need for additional check: for which key need change output value
          if 'Caps' is activated for russian language */
          const arr = ['Backquote', 'BracketLeft', 'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period'];
          if (keyCode.includes('Key') || (this.lang === 'ru' && arr.includes(keyCode) === true)) {
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
        switch (true) {
          case which == '20':
          case which == '16':
            break;
          default:
            btn.classList.remove('clicked');
        }
      });
    });

    const shiftBtns = document.querySelectorAll('[data-which="16"]');
    const capsLockBtn = document.querySelector('[data-which="20"]');
  }

  switchVoiceEntering() {
    const recognition = new webkitSpeechRecognition();

    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    this.lang === 'en' ? recognition.lang = 'en-US' : recognition.lang = 'ru-Ru'

    recognition.addEventListener('result', e => {
      const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

      if (!this.isVoiceEnteringOn) {
        return;
      } if (e.results[0].isFinal) {
        document.querySelector('.textarea').textContent += ` ${transcript}`;
      }
    });

    if (this.isVoiceEnteringOn) {
      this.isVoiceEnteringOn = false;
      recognition.abort();
    } else {
      this.isVoiceEnteringOn = true;
      recognition.start();
      recognition.onresult = function (event) {
        recognition.stop();
        recognition.addEventListener('end', () => {
          if (document.querySelector('[data-additional-which="voiceEntering"]').classList.contains('clicked')) {
            recognition.start();
          } else {
            recognition.abort();
          }
        });
      };
    }
  }

  addHandlerForAdditionalVirtualKeys() {
    const voiceEnteringBtn = document.querySelector('[data-additional-which="voiceEntering"]');
    const switchLanguageBtn = document.querySelector('[data-additional-which="switchLanguage"]');

    switchLanguageBtn.addEventListener('mousedown', () => {
      switchLanguageBtn.classList.add('clicked');
      switchLanguageBtn.querySelector('.language-icon').classList.remove('icon_default-color');
      switchLanguageBtn.querySelector('.language-icon').classList.add('icon_clicked');
      switchLanguageBtn.querySelector('div').textContent = this.lang;
      switchLanguageBtn.addEventListener('mouseup', () => {
        switchLanguageBtn.classList.remove('clicked');
        switchLanguageBtn.querySelector('.language-icon').classList.remove('icon_clicked');
        switchLanguageBtn.querySelector('.language-icon').classList.add('icon_default-color');
      });
      switchLanguageBtn.addEventListener('mouseout', () => {
        switchLanguageBtn.classList.remove('clicked');
        switchLanguageBtn.querySelector('.language-icon').classList.remove('icon_clicked');
        switchLanguageBtn.querySelector('.language-icon').classList.add('icon_default-color');
      });
    });

    voiceEnteringBtn.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('clicked')) {
        e.target.classList.remove('clicked');
        voiceEnteringBtn.querySelector('.microphone-icon').classList.remove('icon_clicked');
        voiceEnteringBtn.querySelector('.microphone-icon').classList.add('icon_default-color');
        this.switchVoiceEntering();
      } else {
        e.target.classList.add('clicked');
        voiceEnteringBtn.querySelector('.microphone-icon').classList.remove('icon_default-color');
        voiceEnteringBtn.querySelector('.microphone-icon').classList.add('icon_clicked');
        this.switchVoiceEntering();
      }
    });
  }

  addHandlerForPhysicalKeys() {
    const textarea = document.querySelector('textarea');
    let virtualBtn;

    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      if (event.code === 'ShiftRight' || event.code === 'ControlRight' || event.code === 'AltRight') {
        virtualBtn = document.querySelectorAll(`[data-which="${event.which}"]`)[1];
      } else {
        virtualBtn = document.querySelector(`[data-which="${event.which}"]`);
      }
      if (virtualBtn !== null) virtualBtn.classList.add('clicked');
    });

    window.addEventListener('keyup', (event) => {
      event.preventDefault();
      if (event.code === 'ShiftRight' || event.code === 'ControlRight' || event.code === 'AltRight') {
        virtualBtn = document.querySelectorAll(`[data-which="${event.which}"]`)[1];
      } else {
        virtualBtn = document.querySelector(`[data-which="${event.which}"]`);
      }
      if (virtualBtn !== null) {
        textarea.blur();
        virtualBtn.classList.remove('clicked');
        const keyVal = this.keysValues.find((key) => key.eCode === event.code).eKey;
        const keyShiftVal = this.keysValues.find((key) => key.eCode === event.code).eKeyShift;
        if (this.shiftPressed) {
          this.modifyTextareaValue(event.code, keyShiftVal, textarea);
        } else if (this.capsLockOn) {
          /* this array need for additional check: for which key need change output value
          if 'Caps' is activated for russian language */
          const arr = ['Backquote', 'BracketLeft', 'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period'];
          if (event.code.includes('Key') || (this.lang === 'ru' && arr.includes(event.code) === true)) {
            this.modifyTextareaValue(event.code, keyShiftVal, textarea);
          } else {
            this.modifyTextareaValue(event.code, keyVal, textarea);
          }
        } else {
          this.modifyTextareaValue(event.code, keyVal, textarea);
        }
      }
    });
  }
}
