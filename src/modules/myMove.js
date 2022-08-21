//this function is responsible to make animation it takes a dom element
//and the last cordinate of the element  (posX,posY) and creates animation 
//by moving the element from its intial position to its last destiny 
//represented by given coordinate (posX,posY) 

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

  export default myMove;