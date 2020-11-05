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
    this.isBtnSoundsOn = false;
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
    const currCaretPosition = textarea.selectionStart;
    const currTextareaValue = textarea.value;
    let positionFromLeft;

    const changeStringValue = (addedValue, currStrValue = currTextareaValue) => {
      if (currCaretPosition !== textarea.value.length) {
        if (addedValue === 'Backspace') {
          textarea.value = currStrValue.substring(0, currCaretPosition - 1) + currStrValue.substring(currCaretPosition);
        } else if (addedValue === 'Delete') {
          textarea.value = currStrValue.substring(0, currCaretPosition) + currStrValue.substring(currCaretPosition + 1);
        } else if(addedValue === 'Tab') {
          textarea.value = `${currStrValue.substring(0, currCaretPosition)}\t${currStrValue.substring(currCaretPosition)}`;
        } else if(addedValue === 'Enter') {
          textarea.value = `${currStrValue.substring(0, currCaretPosition)}\n${currStrValue.substring(currCaretPosition)}`;
        } else {
          textarea.value = currStrValue.substring(0, currCaretPosition) + keyVal + currStrValue.substring(currCaretPosition);
        }
      } else {
        if (addedValue === 'Backspace') {
          textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        } else if (addedValue === 'Delete') {
          return;
        } else if (addedValue === 'Tab') {
          textarea.value += '\t';
        } else if (addedValue === 'Enter') {
          textarea.value += '\n';
        } else {
          textarea.value += addedValue;
        }
      }
    };

    const updateCursorPosition = (cursorShift = 1) => {
      textarea.selectionStart = currCaretPosition + cursorShift;
      textarea.selectionEnd = currCaretPosition + cursorShift;
    };

    textarea.focus();
    switch (eventCode) {
      case 'Backspace':
        changeStringValue(eventCode);
        updateCursorPosition(-1);
        break;
      case 'Delete':
        changeStringValue(eventCode);
        updateCursorPosition(0);
        break;
      case 'Tab':
        changeStringValue(eventCode);
        updateCursorPosition();
        break;

      case 'Enter':
        changeStringValue(eventCode);
        updateCursorPosition();
        break;
      case 'Space':
        changeStringValue(' ');
        updateCursorPosition();
        break;
      case 'ArrowLeft':
        if (currCaretPosition - 1 >= 0) {
          textarea.selectionStart = currCaretPosition - 1;
          textarea.selectionEnd = currCaretPosition - 1;
        } else {
          textarea.selectionStart = 0;
          textarea.selectionEnd = 0;
        }
        break;
      case 'ArrowRight':
        textarea.selectionStart += 1;
        textarea.selectionEnd = textarea.selectionStart;
        break;
      case 'ArrowUp':
        positionFromLeft = currTextareaValue.slice(0, currCaretPosition).match(/(\n).*$(?!\1)/g) || [[1]];
        textarea.selectionStart -= positionFromLeft[0].length;
        textarea.selectionEnd = textarea.selectionStart;
        break;
      case 'ArrowDown':
        positionFromLeft = currTextareaValue.slice(currCaretPosition).match(/^.*(\n).*(?!\1)/) || [[1]];
        textarea.selectionStart += positionFromLeft[0].length;
        textarea.selectionEnd = textarea.selectionStart;
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
        changeStringValue(keyVal);
        updateCursorPosition();
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

        if (which == '20' && btn.classList.contains('clicked')) {
          btn.classList.remove('clicked');
        } else if (which == '16' && btn.classList.contains('clicked')) {
          btn.classList.remove('clicked');
        } else {
          btn.classList.add('clicked');
          btn.addEventListener('mouseout', () => {
            textarea.focus();
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
        textarea.focus();
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

  appendBtnSoundsOnPage() {
    const btnSounds = new Map([
      ['key-en', './src/sounds/en/key.mp3'],
      ['key-ru', './src/sounds/ru/key.mp3'],
      ['20', './src/sounds/caps.mp3'],
      ['8', './src/sounds/backspace.mp3'],
      ['16', './src/sounds/shift.mp3'],
      ['13', './src/sounds/enter.mp3'],
    ]);

    const soundsContainer = document.querySelector('.sounds__container');

    for (let [key, value] of btnSounds){
      const audio = document.createElement('audio');
      audio.src = value;
      audio.crossOrigin="anonymous";
      audio.setAttribute('data-which', key);
      soundsContainer.append(audio);
    };

    document.body.append(soundsContainer);
  }

  switchingOnOffBtnSounds() {
    const virtualBtns = document.querySelectorAll('.keyboard__key');
    const additionalVirtualBtns = document.querySelectorAll('.keyboard__additional-key');

    virtualBtns.forEach((btn) => {
      const which = btn.getAttribute('data-which');

      btn.addEventListener('mousedown', (event) => {
        switch (true) {
          case which === '20':
            this.isBtnSoundsOn ? document.querySelector('audio[data-which="20"]').play() : document.querySelector('audio[data-which="20"]').stop();
            break;
          case which === '8':
            this.isBtnSoundsOn ? document.querySelector('audio[data-which="8"]').play() : document.querySelector('audio[data-which="8"]').stop();
            break;
          case which === '16':
            this.isBtnSoundsOn ? document.querySelector('audio[data-which="16"]').play() : document.querySelector('audio[data-which="16"]').stop();
            break;
          case which === '13':
            this.isBtnSoundsOn ? document.querySelector('audio[data-which="13"]').play() : document.querySelector('audio[data-which="13"]').stop();
            break;
          default:
            if (this.lang === 'ru') {
              this.isBtnSoundsOn ? document.querySelector('audio[data-which="key-ru"]').play() : document.querySelector('audio[data-which="key-ru"]').stop();
            } else {
              this.isBtnSoundsOn ? document.querySelector('audio[data-which="key-en"]').play() : document.querySelector('audio[data-which="key-en"]').stop();
            }
            break;
        }
      });
    });

    additionalVirtualBtns.forEach((btn) => {
      btn.addEventListener('mousedown', () => {
        if (this.lang === 'ru') {
          this.isBtnSoundsOn ? document.querySelector('audio[data-which="key-ru"]').play() : document.querySelector('audio[data-which="key-ru"]').stop();
        } else {
          this.isBtnSoundsOn ? document.querySelector('audio[data-which="key-en"]').play() : document.querySelector('audio[data-which="key-en"]').stop();
        }
      });
    });

    window.addEventListener('keydown', (event) => {
      let virtualBtn;
      event.preventDefault();

      virtualBtn = document.querySelector(`[data-which="${event.which}"]`);

      if (virtualBtn !== null) {
        switch (true) {
          case event.keyCode === 20:
            this.isBtnSoundsOn ? document.querySelector('audio[data-which="20"]').play() : document.querySelector('audio[data-which="20"]').stop();
            break;
          case event.keyCode === 8:
            this.isBtnSoundsOn ? document.querySelector('audio[data-which="8"]').play() : document.querySelector('audio[data-which="8"]').stop();
            break;
          case event.keyCode === 16:
            this.isBtnSoundsOn ? document.querySelector('audio[data-which="16"]').play() : document.querySelector('audio[data-which="16"]').stop();
            break;
          case event.keyCode === 13:
            this.isBtnSoundsOn ? document.querySelector('audio[data-which="13"]').play() : document.querySelector('audio[data-which="13"]').stop();
            break;
          default:
            if (this.lang === 'ru') {
              this.isBtnSoundsOn ? document.querySelector('audio[data-which="key-ru"]').play() : document.querySelector('audio[data-which="key-ru"]').stop();
            } else {
              this.isBtnSoundsOn ? document.querySelector('audio[data-which="key-en"]').play() : document.querySelector('audio[data-which="key-en"]').stop();
            }
            break;
        }
      }
    });
  }

  addHandlerForAdditionalVirtualKeys() {
    const voiceEnteringBtn = document.querySelector('[data-additional-which="voiceEntering"]');
    const switchLanguageBtn = document.querySelector('[data-additional-which="switchLanguage"]');
    const switchSoundOnOffBtn = document.querySelector('[data-additional-which="btnSounds"]');

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

    switchSoundOnOffBtn.addEventListener('mousedown', (e) => {
      if (this.isBtnSoundsOn) {
        e.target.classList.remove('clicked');
        switchSoundOnOffBtn.querySelector('.sound-icon').classList.remove('icon_clicked');
        switchSoundOnOffBtn.querySelector('.sound-icon').classList.add('icon_default-color');
        this.isBtnSoundsOn = false;
      } else {
        e.target.classList.add('clicked');
        switchSoundOnOffBtn.querySelector('.sound-icon').classList.remove('icon_default-color');
        switchSoundOnOffBtn.querySelector('.sound-icon').classList.add('icon_clicked');
        this.isBtnSoundsOn = true;
      }

      this.switchingOnOffBtnSounds();
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
