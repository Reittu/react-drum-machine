export default function initKeyboard(callback, setter) {
  document.body.addEventListener('keydown', event => {
    switch (event.keyCode) {
      case 81:
        callback('Q', setter);
        break;
      case 87:
        callback('W', setter);
        break;
      case 69:
        callback('E', setter);
        break;
      case 65:
        callback('A', setter);
        break;
      case 83:
        callback('S', setter);
        break;
      case 68:
        callback('D', setter);
        break;
      case 90:
        callback('Z', setter);
        break;
      case 88:
        callback('X', setter);
        break;
      case 67:
        callback('C', setter);
        break;
      default:
        break;
    }
  });
};