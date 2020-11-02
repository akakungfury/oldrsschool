const enKeyboardLayout = [
  [
    {
      eWhich: 192, eCode: 'Backquote', eKey: '`', eKeyShift: '~',
    },
    {
      eWhich: 49, eCode: 'Digit1', eKey: '1', eKeyShift: '!',
    },
    {
      eWhich: 50, eCode: 'Digit2', eKey: '2', eKeyShift: '@',
    },
    {
      eWhich: 51, eCode: 'Digit3', eKey: '3', eKeyShift: '#',
    },
    {
      eWhich: 52, eCode: 'Digit4', eKey: '4', eKeyShift: '$',
    },
    {
      eWhich: 53, eCode: 'Digit5', eKey: '5', eKeyShift: '%',
    },
    {
      eWhich: 54, eCode: 'Digit6', eKey: '6', eKeyShift: '^',
    },
    {
      eWhich: 55, eCode: 'Digit7', eKey: '7', eKeyShift: '&',
    },
    {
      eWhich: 56, eCode: 'Digit8', eKey: '8', eKeyShift: '*',
    },
    {
      eWhich: 57, eCode: 'Digit9', eKey: '9', eKeyShift: '(',
    },
    {
      eWhich: 48, eCode: 'Digit0', eKey: '0', eKeyShift: ')',
    },
    {
      eWhich: 189, eCode: 'Minus', eKey: '-', eKeyShift: '_',
    },
    {
      eWhich: 187, eCode: 'Equal', eKey: '=', eKeyShift: '+',
    },
    {
      eWhich: 8, eCode: 'Backspace', eKey: 'Backspace', eKeyShift: 'Backspace',
    },
  ],
  [
    {
      eWhich: 9, eCode: 'Tab', eKey: 'Tab', eKeyShift: 'Tab',
    },
    {
      eWhich: 81, eCode: 'KeyQ', eKey: 'q', eKeyShift: 'Q',
    },
    {
      eWhich: 87, eCode: 'KeyW', eKey: 'w', eKeyShift: 'W',
    },
    {
      eWhich: 69, eCode: 'KeyE', eKey: 'e', eKeyShift: 'E',
    },
    {
      eWhich: 82, eCode: 'KeyR', eKey: 'r', eKeyShift: 'R',
    },
    {
      eWhich: 84, eCode: 'KeyT', eKey: 't', eKeyShift: 'T',
    },
    {
      eWhich: 89, eCode: 'KeyY', eKey: 'y', eKeyShift: 'Y',
    },
    {
      eWhich: 85, eCode: 'KeyU', eKey: 'u', eKeyShift: 'U',
    },
    {
      eWhich: 73, eCode: 'KeyI', eKey: 'i', eKeyShift: 'I',
    },
    {
      eWhich: 79, eCode: 'KeyO', eKey: 'o', eKeyShift: 'O',
    },
    {
      eWhich: 80, eCode: 'KeyP', eKey: 'p', eKeyShift: 'P',
    },
    {
      eWhich: 219, eCode: 'BracketLeft', eKey: '[', eKeyShift: '{',
    },
    {
      eWhich: 221, eCode: 'BracketRight', eKey: ']', eKeyShift: '}',
    },
    {
      eWhich: 220, eCode: 'Backslash', eKey: '\\', eKeyShift: '|',
    },
    {
      eWhich: 46, eCode: 'Delete', eKey: 'Del', eKeyShift: 'Del',
    },
  ],
  [
    {
      eWhich: 20, eCode: 'CapsLock', eKey: 'Caps', eKeyShift: 'Caps',
    },
    {
      eWhich: 65, eCode: 'KeyA', eKey: 'a', eKeyShift: 'A',
    },
    {
      eWhich: 83, eCode: 'KeyS', eKey: 's', eKeyShift: 'S',
    },
    {
      eWhich: 68, eCode: 'KeyD', eKey: 'd', eKeyShift: 'D',
    },
    {
      eWhich: 70, eCode: 'KeyF', eKey: 'f', eKeyShift: 'F',
    },
    {
      eWhich: 71, eCode: 'KeyG', eKey: 'g', eKeyShift: 'G',
    },
    {
      eWhich: 72, eCode: 'KeyH', eKey: 'h', eKeyShift: 'H',
    },
    {
      eWhich: 74, eCode: 'KeyJ', eKey: 'j', eKeyShift: 'J',
    },
    {
      eWhich: 75, eCode: 'KeyK', eKey: 'k', eKeyShift: 'K',
    },
    {
      eWhich: 76, eCode: 'KeyL', eKey: 'l', eKeyShift: 'L',
    },
    {
      eWhich: 186, eCode: 'Semicolon', eKey: ';', eKeyShift: ':',
    },
    {
      eWhich: 222, eCode: 'Quote', eKey: '\'', eKeyShift: '"',
    },
    {
      eWhich: 13, eCode: 'Enter', eKey: 'Enter', eKeyShift: 'Enter',
    },
  ],
  [
    {
      eWhich: 16, eCode: 'ShiftLeft', eKey: 'Shift', eKeyShift: 'Shift',
    },
    {
      eWhich: 90, eCode: 'KeyZ', eKey: 'z', eKeyShift: 'Z',
    },
    {
      eWhich: 88, eCode: 'KeyX', eKey: 'x', eKeyShift: 'X',
    },
    {
      eWhich: 67, eCode: 'KeyC', eKey: 'c', eKeyShift: 'C',
    },
    {
      eWhich: 86, eCode: 'KeyV', eKey: 'v', eKeyShift: 'V',
    },
    {
      eWhich: 66, eCode: 'KeyB', eKey: 'b', eKeyShift: 'B',
    },
    {
      eWhich: 78, eCode: 'KeyN', eKey: 'n', eKeyShift: 'N',
    },
    {
      eWhich: 77, eCode: 'KeyM', eKey: 'm', eKeyShift: 'M',
    },
    {
      eWhich: 188, eCode: 'Comma', eKey: ',', eKeyShift: '<',
    },
    {
      eWhich: 190, eCode: 'Period', eKey: '.', eKeyShift: '>',
    },
    {
      eWhich: 191, eCode: 'Slash', eKey: '/', eKeyShift: '?',
    },
    {
      eWhich: 38, eCode: 'ArrowUp', eKey: '▲', eKeyShift: '▲',
    },
    {
      eWhich: 16, eCode: 'ShiftRight', eKey: 'Shift', eKeyShift: 'Shift',
    },
  ],
  [
    {
      eWhich: 17, eCode: 'ControlLeft', eKey: 'Ctrl', eKeyShift: 'Ctrl',
    },
    {
      eWhich: 91, eCode: 'MetaLeft', eKey: 'Win', eKeyShift: 'Win',
    },
    {
      eWhich: 18, eCode: 'AltLeft', eKey: 'Alt', eKeyShift: 'Alt',
    },
    {
      eWhich: 32, eCode: 'Space', eKey: ' ', eKeyShift: ' ',
    },
    {
      eWhich: 18, eCode: 'AltRight', eKey: 'Alt', eKeyShift: 'Alt',
    },
    {
      eWhich: 37, eCode: 'ArrowLeft', eKey: '◄', eKeyShift: '◄',
    },
    {
      eWhich: 40, eCode: 'ArrowDown', eKey: '▼', eKeyShift: '▼',
    },
    {
      eWhich: 39, eCode: 'ArrowRight', eKey: '►', eKeyShift: '►',
    },
    {
      eWhich: 17, eCode: 'ControlRight', eKey: 'Ctrl', eKeyShift: 'Ctrl',
    },
  ],
];

const ruKeyboardLayout = [
  [
    {
      eWhich: 192, eCode: 'Backquote', eKey: 'ё', eKeyShift: 'Ё',
    },
    {
      eWhich: 49, eCode: 'Digit1', eKey: '1', eKeyShift: '!',
    },
    {
      eWhich: 50, eCode: 'Digit2', eKey: '2', eKeyShift: '"',
    },
    {
      eWhich: 51, eCode: 'Digit3', eKey: '3', eKeyShift: '№',
    },
    {
      eWhich: 52, eCode: 'Digit4', eKey: '4', eKeyShift: ';',
    },
    {
      eWhich: 53, eCode: 'Digit5', eKey: '5', eKeyShift: '%',
    },
    {
      eWhich: 54, eCode: 'Digit6', eKey: '6', eKeyShift: ':',
    },
    {
      eWhich: 55, eCode: 'Digit7', eKey: '7', eKeyShift: '?',
    },
    {
      eWhich: 56, eCode: 'Digit8', eKey: '8', eKeyShift: '*',
    },
    {
      eWhich: 57, eCode: 'Digit9', eKey: '9', eKeyShift: '(',
    },
    {
      eWhich: 48, eCode: 'Digit0', eKey: '0', eKeyShift: ')',
    },
    {
      eWhich: 189, eCode: 'Minus', eKey: '-', eKeyShift: '_',
    },
    {
      eWhich: 187, eCode: 'Equal', eKey: '=', eKeyShift: '+',
    },
    {
      eWhich: 8, eCode: 'Backspace', eKey: 'Backspace', eKeyShift: 'Backspace',
    },
  ],
  [
    {
      eWhich: 9, eCode: 'Tab', eKey: 'Tab', eKeyShift: 'Tab',
    },
    {
      eWhich: 81, eCode: 'KeyQ', eKey: 'й', eKeyShift: 'Й',
    },
    {
      eWhich: 87, eCode: 'KeyW', eKey: 'ц', eKeyShift: 'Ц',
    },
    {
      eWhich: 69, eCode: 'KeyE', eKey: 'у', eKeyShift: 'У',
    },
    {
      eWhich: 82, eCode: 'KeyR', eKey: 'к', eKeyShift: 'К',
    },
    {
      eWhich: 84, eCode: 'KeyT', eKey: 'е', eKeyShift: 'Е',
    },
    {
      eWhich: 89, eCode: 'KeyY', eKey: 'н', eKeyShift: 'Н',
    },
    {
      eWhich: 85, eCode: 'KeyU', eKey: 'г', eKeyShift: 'Г',
    },
    {
      eWhich: 73, eCode: 'KeyI', eKey: 'ш', eKeyShift: 'Ш',
    },
    {
      eWhich: 79, eCode: 'KeyO', eKey: 'щ', eKeyShift: 'Щ',
    },
    {
      eWhich: 80, eCode: 'KeyP', eKey: 'з', eKeyShift: 'З',
    },
    {
      eWhich: 219, eCode: 'BracketLeft', eKey: 'х', eKeyShift: 'Х',
    },
    {
      eWhich: 221, eCode: 'BracketRight', eKey: 'ъ', eKeyShift: 'Ъ',
    },
    {
      eWhich: 220, eCode: 'Backslash', eKey: '\\', eKeyShift: '/',
    },
    {
      eWhich: 46, eCode: 'Delete', eKey: 'Del', eKeyShift: 'Del',
    },
  ],
  [
    {
      eWhich: 20, eCode: 'CapsLock', eKey: 'Caps', eKeyShift: 'Caps',
    },
    {
      eWhich: 65, eCode: 'KeyA', eKey: 'ф', eKeyShift: 'Ф',
    },
    {
      eWhich: 83, eCode: 'KeyS', eKey: 'ы', eKeyShift: 'Ы',
    },
    {
      eWhich: 68, eCode: 'KeyD', eKey: 'в', eKeyShift: 'В',
    },
    {
      eWhich: 70, eCode: 'KeyF', eKey: 'а', eKeyShift: 'А',
    },
    {
      eWhich: 71, eCode: 'KeyG', eKey: 'п', eKeyShift: 'П',
    },
    {
      eWhich: 72, eCode: 'KeyH', eKey: 'р', eKeyShift: 'Р',
    },
    {
      eWhich: 74, eCode: 'KeyJ', eKey: 'о', eKeyShift: 'О',
    },
    {
      eWhich: 75, eCode: 'KeyK', eKey: 'л', eKeyShift: 'Л',
    },
    {
      eWhich: 76, eCode: 'KeyL', eKey: 'д', eKeyShift: 'Д',
    },
    {
      eWhich: 186, eCode: 'Semicolon', eKey: 'ж', eKeyShift: 'Ж',
    },
    {
      eWhich: 222, eCode: 'Quote', eKey: 'э', eKeyShift: 'Э',
    },
    {
      eWhich: 13, eCode: 'Enter', eKey: 'Enter', eKeyShift: 'Enter',
    },
  ],
  [
    {
      eWhich: 16, eCode: 'ShiftLeft', eKey: 'Shift', eKeyShift: 'Shift',
    },
    {
      eWhich: 90, eCode: 'KeyZ', eKey: 'я', eKeyShift: 'Я',
    },
    {
      eWhich: 88, eCode: 'KeyX', eKey: 'ч', eKeyShift: 'Ч',
    },
    {
      eWhich: 67, eCode: 'KeyC', eKey: 'с', eKeyShift: 'С',
    },
    {
      eWhich: 86, eCode: 'KeyV', eKey: 'м', eKeyShift: 'М',
    },
    {
      eWhich: 66, eCode: 'KeyB', eKey: 'и', eKeyShift: 'И',
    },
    {
      eWhich: 78, eCode: 'KeyN', eKey: 'т', eKeyShift: 'Т',
    },
    {
      eWhich: 77, eCode: 'KeyM', eKey: 'ь', eKeyShift: 'Ь',
    },
    {
      eWhich: 188, eCode: 'Comma', eKey: 'б', eKeyShift: 'Б',
    },
    {
      eWhich: 190, eCode: 'Period', eKey: 'ю', eKeyShift: 'Ю',
    },
    {
      eWhich: 191, eCode: 'Slash', eKey: '.', eKeyShift: ',',
    },
    {
      eWhich: 38, eCode: 'ArrowUp', eKey: '▲', eKeyShift: '▲',
    },
    {
      eWhich: 16, eCode: 'ShiftRight', eKey: 'Shift', eKeyShift: 'Shift',
    },
  ],
  [
    {
      eWhich: 17, eCode: 'ControlLeft', eKey: 'Ctrl', eKeyShift: 'Ctrl',
    },
    {
      eWhich: 91, eCode: 'MetaLeft', eKey: 'Win', eKeyShift: 'Win',
    },
    {
      eWhich: 18, eCode: 'AltLeft', eKey: 'Alt', eKeyShift: 'Alt',
    },
    {
      eWhich: 32, eCode: 'Space', eKey: ' ', eKeyShift: ' ',
    },
    {
      eWhich: 18, eCode: 'AltRight', eKey: 'Alt', eKeyShift: 'Alt',
    },
    {
      eWhich: 37, eCode: 'ArrowLeft', eKey: '◄', eKeyShift: '◄',
    },
    {
      eWhich: 40, eCode: 'ArrowDown', eKey: '▼', eKeyShift: '▼',
    },
    {
      eWhich: 39, eCode: 'ArrowRight', eKey: '►', eKeyShift: '►',
    },
    {
      eWhich: 17, eCode: 'ControlRight', eKey: 'Ctrl', eKeyShift: 'Ctrl',
    },
  ],
];

const enKeys = [
    {
      eWhich: 192, eCode: 'Backquote', eKey: '`', eKeyShift: '~',
    },
    {
      eWhich: 49, eCode: 'Digit1', eKey: '1', eKeyShift: '!',
    },
    {
      eWhich: 50, eCode: 'Digit2', eKey: '2', eKeyShift: '@',
    },
    {
      eWhich: 51, eCode: 'Digit3', eKey: '3', eKeyShift: '#',
    },
    {
      eWhich: 52, eCode: 'Digit4', eKey: '4', eKeyShift: '$',
    },
    {
      eWhich: 53, eCode: 'Digit5', eKey: '5', eKeyShift: '%',
    },
    {
      eWhich: 54, eCode: 'Digit6', eKey: '6', eKeyShift: '^',
    },
    {
      eWhich: 55, eCode: 'Digit7', eKey: '7', eKeyShift: '&',
    },
    {
      eWhich: 56, eCode: 'Digit8', eKey: '8', eKeyShift: '*',
    },
    {
      eWhich: 57, eCode: 'Digit9', eKey: '9', eKeyShift: '(',
    },
    {
      eWhich: 48, eCode: 'Digit0', eKey: '0', eKeyShift: ')',
    },
    {
      eWhich: 189, eCode: 'Minus', eKey: '-', eKeyShift: '_',
    },
    {
      eWhich: 187, eCode: 'Equal', eKey: '=', eKeyShift: '+',
    },
    {
      eWhich: 8, eCode: 'Backspace', eKey: 'Backspace', eKeyShift: 'Backspace',
    },
    {
      eWhich: 9, eCode: 'Tab', eKey: 'Tab', eKeyShift: 'Tab',
    },
    {
      eWhich: 81, eCode: 'KeyQ', eKey: 'q', eKeyShift: 'Q',
    },
    {
      eWhich: 87, eCode: 'KeyW', eKey: 'w', eKeyShift: 'W',
    },
    {
      eWhich: 69, eCode: 'KeyE', eKey: 'e', eKeyShift: 'E',
    },
    {
      eWhich: 82, eCode: 'KeyR', eKey: 'r', eKeyShift: 'R',
    },
    {
      eWhich: 84, eCode: 'KeyT', eKey: 't', eKeyShift: 'T',
    },
    {
      eWhich: 89, eCode: 'KeyY', eKey: 'y', eKeyShift: 'Y',
    },
    {
      eWhich: 85, eCode: 'KeyU', eKey: 'u', eKeyShift: 'U',
    },
    {
      eWhich: 73, eCode: 'KeyI', eKey: 'i', eKeyShift: 'I',
    },
    {
      eWhich: 79, eCode: 'KeyO', eKey: 'o', eKeyShift: 'O',
    },
    {
      eWhich: 80, eCode: 'KeyP', eKey: 'p', eKeyShift: 'P',
    },
    {
      eWhich: 219, eCode: 'BracketLeft', eKey: '[', eKeyShift: '{',
    },
    {
      eWhich: 221, eCode: 'BracketRight', eKey: ']', eKeyShift: '}',
    },
    {
      eWhich: 220, eCode: 'Backslash', eKey: '\\', eKeyShift: '|',
    },
    {
      eWhich: 46, eCode: 'Delete', eKey: 'Del', eKeyShift: 'Del',
    },
    {
      eWhich: 20, eCode: 'CapsLock', eKey: 'Caps', eKeyShift: 'Caps',
    },
    {
      eWhich: 65, eCode: 'KeyA', eKey: 'a', eKeyShift: 'A',
    },
    {
      eWhich: 83, eCode: 'KeyS', eKey: 's', eKeyShift: 'S',
    },
    {
      eWhich: 68, eCode: 'KeyD', eKey: 'd', eKeyShift: 'D',
    },
    {
      eWhich: 70, eCode: 'KeyF', eKey: 'f', eKeyShift: 'F',
    },
    {
      eWhich: 71, eCode: 'KeyG', eKey: 'g', eKeyShift: 'G',
    },
    {
      eWhich: 72, eCode: 'KeyH', eKey: 'h', eKeyShift: 'H',
    },
    {
      eWhich: 74, eCode: 'KeyJ', eKey: 'j', eKeyShift: 'J',
    },
    {
      eWhich: 75, eCode: 'KeyK', eKey: 'k', eKeyShift: 'K',
    },
    {
      eWhich: 76, eCode: 'KeyL', eKey: 'l', eKeyShift: 'L',
    },
    {
      eWhich: 186, eCode: 'Semicolon', eKey: ';', eKeyShift: ':',
    },
    {
      eWhich: 222, eCode: 'Quote', eKey: '\'', eKeyShift: '"',
    },
    {
      eWhich: 13, eCode: 'Enter', eKey: 'Enter', eKeyShift: 'Enter',
    },
    {
      eWhich: 16, eCode: 'ShiftLeft', eKey: 'Shift', eKeyShift: 'Shift',
    },
    {
      eWhich: 90, eCode: 'KeyZ', eKey: 'z', eKeyShift: 'Z',
    },
    {
      eWhich: 88, eCode: 'KeyX', eKey: 'x', eKeyShift: 'X',
    },
    {
      eWhich: 67, eCode: 'KeyC', eKey: 'c', eKeyShift: 'C',
    },
    {
      eWhich: 86, eCode: 'KeyV', eKey: 'v', eKeyShift: 'V',
    },
    {
      eWhich: 66, eCode: 'KeyB', eKey: 'b', eKeyShift: 'B',
    },
    {
      eWhich: 78, eCode: 'KeyN', eKey: 'n', eKeyShift: 'N',
    },
    {
      eWhich: 77, eCode: 'KeyM', eKey: 'm', eKeyShift: 'M',
    },
    {
      eWhich: 188, eCode: 'Comma', eKey: ',', eKeyShift: '<',
    },
    {
      eWhich: 190, eCode: 'Period', eKey: '.', eKeyShift: '>',
    },
    {
      eWhich: 191, eCode: 'Slash', eKey: '/', eKeyShift: '?',
    },
    {
      eWhich: 38, eCode: 'ArrowUp', eKey: '▲', eKeyShift: '▲',
    },
    {
      eWhich: 16, eCode: 'ShiftRight', eKey: 'Shift', eKeyShift: 'Shift',
    },
    {
      eWhich: 17, eCode: 'ControlLeft', eKey: 'Ctrl', eKeyShift: 'Ctrl',
    },
    {
      eWhich: 91, eCode: 'MetaLeft', eKey: 'Win', eKeyShift: 'Win',
    },
    {
      eWhich: 18, eCode: 'AltLeft', eKey: 'Alt', eKeyShift: 'Alt',
    },
    {
      eWhich: 32, eCode: 'Space', eKey: ' ', eKeyShift: ' ',
    },
    {
      eWhich: 18, eCode: 'AltRight', eKey: 'Alt', eKeyShift: 'Alt',
    },
    {
      eWhich: 37, eCode: 'ArrowLeft', eKey: '◄', eKeyShift: '◄',
    },
    {
      eWhich: 40, eCode: 'ArrowDown', eKey: '▼', eKeyShift: '▼',
    },
    {
      eWhich: 39, eCode: 'ArrowRight', eKey: '►', eKeyShift: '►',
    },
    {
      eWhich: 17, eCode: 'ControlRight', eKey: 'Ctrl', eKeyShift: 'Ctrl',
    },
];

const ruKeys = [
    {
      eWhich: 192, eCode: 'Backquote', eKey: 'ё', eKeyShift: 'Ё',
    },
    {
      eWhich: 49, eCode: 'Digit1', eKey: '1', eKeyShift: '!',
    },
    {
      eWhich: 50, eCode: 'Digit2', eKey: '2', eKeyShift: '"',
    },
    {
      eWhich: 51, eCode: 'Digit3', eKey: '3', eKeyShift: '№',
    },
    {
      eWhich: 52, eCode: 'Digit4', eKey: '4', eKeyShift: ';',
    },
    {
      eWhich: 53, eCode: 'Digit5', eKey: '5', eKeyShift: '%',
    },
    {
      eWhich: 54, eCode: 'Digit6', eKey: '6', eKeyShift: ':',
    },
    {
      eWhich: 55, eCode: 'Digit7', eKey: '7', eKeyShift: '?',
    },
    {
      eWhich: 56, eCode: 'Digit8', eKey: '8', eKeyShift: '*',
    },
    {
      eWhich: 57, eCode: 'Digit9', eKey: '9', eKeyShift: '(',
    },
    {
      eWhich: 48, eCode: 'Digit0', eKey: '0', eKeyShift: ')',
    },
    {
      eWhich: 189, eCode: 'Minus', eKey: '-', eKeyShift: '_',
    },
    {
      eWhich: 187, eCode: 'Equal', eKey: '=', eKeyShift: '+',
    },
    {
      eWhich: 8, eCode: 'Backspace', eKey: 'Backspace', eKeyShift: 'Backspace',
    },
    {
      eWhich: 9, eCode: 'Tab', eKey: 'Tab', eKeyShift: 'Tab',
    },
    {
      eWhich: 81, eCode: 'KeyQ', eKey: 'й', eKeyShift: 'Й',
    },
    {
      eWhich: 87, eCode: 'KeyW', eKey: 'ц', eKeyShift: 'Ц',
    },
    {
      eWhich: 69, eCode: 'KeyE', eKey: 'у', eKeyShift: 'У',
    },
    {
      eWhich: 82, eCode: 'KeyR', eKey: 'к', eKeyShift: 'К',
    },
    {
      eWhich: 84, eCode: 'KeyT', eKey: 'е', eKeyShift: 'Е',
    },
    {
      eWhich: 89, eCode: 'KeyY', eKey: 'н', eKeyShift: 'Н',
    },
    {
      eWhich: 85, eCode: 'KeyU', eKey: 'г', eKeyShift: 'Г',
    },
    {
      eWhich: 73, eCode: 'KeyI', eKey: 'ш', eKeyShift: 'Ш',
    },
    {
      eWhich: 79, eCode: 'KeyO', eKey: 'щ', eKeyShift: 'Щ',
    },
    {
      eWhich: 80, eCode: 'KeyP', eKey: 'з', eKeyShift: 'З',
    },
    {
      eWhich: 219, eCode: 'BracketLeft', eKey: 'х', eKeyShift: 'Х',
    },
    {
      eWhich: 221, eCode: 'BracketRight', eKey: 'ъ', eKeyShift: 'Ъ',
    },
    {
      eWhich: 220, eCode: 'Backslash', eKey: '\\', eKeyShift: '/',
    },
    {
      eWhich: 46, eCode: 'Delete', eKey: 'Del', eKeyShift: 'Del',
    },
    {
      eWhich: 20, eCode: 'CapsLock', eKey: 'Caps', eKeyShift: 'Caps',
    },
    {
      eWhich: 65, eCode: 'KeyA', eKey: 'ф', eKeyShift: 'Ф',
    },
    {
      eWhich: 83, eCode: 'KeyS', eKey: 'ы', eKeyShift: 'Ы',
    },
    {
      eWhich: 68, eCode: 'KeyD', eKey: 'в', eKeyShift: 'В',
    },
    {
      eWhich: 70, eCode: 'KeyF', eKey: 'а', eKeyShift: 'А',
    },
    {
      eWhich: 71, eCode: 'KeyG', eKey: 'п', eKeyShift: 'П',
    },
    {
      eWhich: 72, eCode: 'KeyH', eKey: 'р', eKeyShift: 'Р',
    },
    {
      eWhich: 74, eCode: 'KeyJ', eKey: 'о', eKeyShift: 'О',
    },
    {
      eWhich: 75, eCode: 'KeyK', eKey: 'л', eKeyShift: 'Л',
    },
    {
      eWhich: 76, eCode: 'KeyL', eKey: 'д', eKeyShift: 'Д',
    },
    {
      eWhich: 186, eCode: 'Semicolon', eKey: 'ж', eKeyShift: 'Ж',
    },
    {
      eWhich: 222, eCode: 'Quote', eKey: 'э', eKeyShift: 'Э',
    },
    {
      eWhich: 13, eCode: 'Enter', eKey: 'Enter', eKeyShift: 'Enter',
    },
    {
      eWhich: 16, eCode: 'ShiftLeft', eKey: 'Shift', eKeyShift: 'Shift',
    },
    {
      eWhich: 90, eCode: 'KeyZ', eKey: 'я', eKeyShift: 'Я',
    },
    {
      eWhich: 88, eCode: 'KeyX', eKey: 'ч', eKeyShift: 'Ч',
    },
    {
      eWhich: 67, eCode: 'KeyC', eKey: 'с', eKeyShift: 'С',
    },
    {
      eWhich: 86, eCode: 'KeyV', eKey: 'м', eKeyShift: 'М',
    },
    {
      eWhich: 66, eCode: 'KeyB', eKey: 'и', eKeyShift: 'И',
    },
    {
      eWhich: 78, eCode: 'KeyN', eKey: 'т', eKeyShift: 'Т',
    },
    {
      eWhich: 77, eCode: 'KeyM', eKey: 'ь', eKeyShift: 'Ь',
    },
    {
      eWhich: 188, eCode: 'Comma', eKey: 'б', eKeyShift: 'Б',
    },
    {
      eWhich: 190, eCode: 'Period', eKey: 'ю', eKeyShift: 'Ю',
    },
    {
      eWhich: 191, eCode: 'Slash', eKey: '.', eKeyShift: ',',
    },
    {
      eWhich: 38, eCode: 'ArrowUp', eKey: '▲', eKeyShift: '▲',
    },
    {
      eWhich: 16, eCode: 'ShiftRight', eKey: 'Shift', eKeyShift: 'Shift',
    },
    {
      eWhich: 17, eCode: 'ControlLeft', eKey: 'Ctrl', eKeyShift: 'Ctrl',
    },
    {
      eWhich: 91, eCode: 'MetaLeft', eKey: 'Win', eKeyShift: 'Win',
    },
    {
      eWhich: 18, eCode: 'AltLeft', eKey: 'Alt', eKeyShift: 'Alt',
    },
    {
      eWhich: 32, eCode: 'Space', eKey: ' ', eKeyShift: ' ',
    },
    {
      eWhich: 18, eCode: 'AltRight', eKey: 'Alt', eKeyShift: 'Alt',
    },
    {
      eWhich: 37, eCode: 'ArrowLeft', eKey: '◄', eKeyShift: '◄',
    },
    {
      eWhich: 40, eCode: 'ArrowDown', eKey: '▼', eKeyShift: '▼',
    },
    {
      eWhich: 39, eCode: 'ArrowRight', eKey: '►', eKeyShift: '►',
    },
    {
      eWhich: 17, eCode: 'ControlRight', eKey: 'Ctrl', eKeyShift: 'Ctrl',
    },
];

export { enKeyboardLayout, ruKeyboardLayout, enKeys, ruKeys };
