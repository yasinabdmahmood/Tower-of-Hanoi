
dragElement(document.getElementById("mydiv"),fun);

function dragElement(elmnt,callback=null) {

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    if(! isDraggable(elmnt)){
      return 
    }
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
   
    pos3 = e.clientX;
    pos4 = e.clientY;
   
    // set the element's new position:
    
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  
  function closeDragElement(e) {
    // stop moving when mouse button is released:
    
    let lastPosition = callback(elmnt)
    myMove(elmnt,...lastPosition)
    document.onmouseup = null;
    document.onmousemove = null;
    
  }
}

function myMove(elem,posX,posY) {
  
  let id = null;
  let startX=elem.offsetLeft;
  let startY=elem.offsetTop;
 
  const stepX=(posX-startX)/100;
  const stepY=(posY-startY)/100;
  


  
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (Math.abs(startX-posX)<1) {
      
      elem.style.top = posY + 'px';
      elem.style.left = posX + 'px';
      clearInterval(id);
      
    } else {
      startX+=stepX;
      startY+=stepY;
      
      elem.style.top = startY + 'px';
      elem.style.left = startX + 'px';
      
    }
  }
}

function isDraggable(elem){
  return true
}

function fun(elem){
 const x=parseInt(document.getElementById('x-position').value);
 const y=parseInt(document.getElementById('y-position').value);
 return [x,y]
}