import isDraggable from './isDraggable.js';

import update1 from './update1.js';

import moveCode from './moveCode.js';

function dragElement(elmnt) {
  let pos1 = 0; let pos2 = 0; let pos3 = 0; let
    pos4 = 0;
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;

    pos3 = e.clientX;
    pos4 = e.clientY;

    // set the element's new position:

    elmnt.style.top = `${elmnt.offsetTop - pos2}px`;
    elmnt.style.left = `${elmnt.offsetLeft - pos1}px`;
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    moveCode(elmnt);

    document.onmouseup = null;
    document.onmousemove = null;
  }

  function dragMouseDown(e) {
    if (!isDraggable(elmnt)) {
      return;
    }
    update1(elmnt);
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  if (document.getElementById(`${elmnt.id}header`)) {
    // if present, the header is where you move the DIV from:

    document.getElementById(`${elmnt.id}header`).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
}

export default dragElement;