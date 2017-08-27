const appendChild = (elem, id, style, parent) => {
  const element = document.createElement(elem);
  element.id = id;

  element.setAttribute('style', style);

  const parentElem = parent || document.body;
  parentElem.appendChild(element);
  return element;
};

const timedRemoveElement = (removeAfter, elem) => {
  setTimeout(() => {
    elem.parentNode.removeChild(elem);
  }, removeAfter);
};

export const renderMapHost = (hostId) => {
  const style = `
    width: 100vw;
    height: 100vh;
  `;

  appendChild('div', hostId, style);
};

export const showToast = (message, displayFor = 3000) => {
  const toastStyle = `
    width: 50vw;
    background: #444;
    color: #fff;
    position: absolute;
    top: 30%;
    left: 25%;
    z-index: 9999;
    border-radius: 30px;
    text-align: center;
  `;

  const toast = document.getElementById('toast') || appendChild('div', 'toast', toastStyle);
  const toastMessage =
    document.getElementById('toast-message') || appendChild('h3', 'toast-message', null, toast);
  toastMessage.innerText = message;

  timedRemoveElement(displayFor, toast);
};
