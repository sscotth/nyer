// https://github.com/electron/electron/blob/master/atom/common/keyboard_util.cc
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code

const CODES = {
  // Row 1
  Escape: 'Escape',

  // Row 2
  // Backquote: '`', // ?
  // Minus: '-', // ?
  // Equal: '=', // ?
  Backspace: 'Backspace',

  // Row 3
  Tab: 'Tab',
  // BracketLeft: '[', // ?
  // BracketRight: ']', // ?
  // Backslash: '\\', // ?

  // Row 4
  // CapsLock: '', // Not Possible?
  // Semicolon: ':', // ?
  // Quote: "'", // ?
  Enter: 'Return',

  // Row 5
  ShiftLeft: 'Shift',
  // Comma: ',', // ?
  // Period: '.', // ?
  // Slash: '/', // ?
  ShiftRight: 'Shift',

  // Row 6
  // fn: '', // Not Possible
  ControlLeft: 'Control',
  AltLeft: 'Alt',
  MetaLeft: 'Meta',
  Space: 'Space',
  MetaRight: 'Meta',
  AltRight: 'Alt',
  // ContextMenu: 'AltGr', // ?
  ArrowLeft: 'Left',
  ArrowUp: 'Up',
  ArrowDown: 'Down',
  ArrowRight: 'Right',

  // Middle Section
  PrintScreen: 'PrintScreen',
  // ScrollLock: '', // Not Possible?
  // Pause: '', // ?
  Insert: 'Insert',
  Home: 'Home',
  PageUp: 'PageUp',
  Delete: 'Delete',
  End: 'End',
  PageDown: 'PageDown',

  // Numpad
  // https://github.com/electron/electron/issues/3332
  Numpad0: '0',
  Numpad1: '1',
  Numpad2: '2',
  Numpad3: '3',
  Numpad4: '4',
  Numpad5: '5',
  Numpad6: '6',
  Numpad7: '7',
  Numpad8: '8',
  Numpad9: '9',
  // NumLock: '', // Not Possible?
  // NumpadAdd: '+', // ?
  // NumpadSubtract: '-', // ?
  // NumpadMultiply: '*', // ?
  // NumpadDivide: '/', // ?
  NumpadEqual: '=',
  NumpadComma: ',',
  NumpadDecimal: '.',
  NumpadEnter: 'Return',

  // Numbers

  Digit0: 0,
  Digit1: 1,
  Digit2: 2,
  Digit3: 3,
  Digit4: 4,
  Digit5: 5,
  Digit6: 6,
  Digit7: 7,
  Digit8: 8,
  Digit9: 9,

  // Letters
  KeyA: 'A',
  KeyB: 'B',
  KeyC: 'C',
  KeyD: 'D',
  KeyE: 'E',
  KeyF: 'F',
  KeyG: 'G',
  KeyH: 'H',
  KeyI: 'I',
  KeyJ: 'J',
  KeyK: 'K',
  KeyL: 'L',
  KeyM: 'M',
  KeyN: 'N',
  KeyO: 'O',
  KeyP: 'P',
  KeyQ: 'Q',
  KeyR: 'R',
  KeyS: 'S',
  KeyT: 'T',
  KeyU: 'U',
  KeyV: 'V',
  KeyW: 'W',
  KeyX: 'X',
  KeyY: 'Y',
  KeyZ: 'Z',

  // Function Keys
  F1: 'F1',
  F2: 'F2',
  F3: 'F3',
  F4: 'F4',
  F5: 'F5',
  F6: 'F6',
  F7: 'F7',
  F8: 'F8',
  F9: 'F9',
  F10: 'F10',
  F11: 'F11',
  F12: 'F12',
  F13: 'F13',
  F14: 'F14',
  F15: 'F15',
  F16: 'F16',
  F17: 'F17',
  F18: 'F18',
  F19: 'F19',
  F20: 'F20',
  F21: 'F21',
  F22: 'F22',
  F23: 'F23',
  F24: 'F24',
}


// Punctuations like ~, !, @, #, $, etc. // ? `%^&*()_=-{}|\/:;"'<>,.// ?
// Plus
// VolumeUp
// VolumeDown
// VolumeMute
// MediaNextTrack
// MediaPreviousTrack
// MediaStop
// MediaPlayPause
//
const AcceleratorCodeFromKeyboardCode = (kbcode) => {
  return CODES[kbcode]
}
