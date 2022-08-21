//this function is supposed to return boolean value 
//the puspose of this funtion is to prevent any disk in the tower of hanoi 
//from being draagged if the disk is not on the top 
//it takes dom elemnet that represents a particular disk and decides whether 
//it should be draggable or not 
//returns true for making disk draggable
//returns false to prevent the disk from being dragged 
import data from "./levelData.js";
import getId from "./getId.js";
function isDraggable(elem){
  const id=getId(elem)
   if(data.topDisks.indexOf(id)===-1){
    return false
   }
   else{
    return true

    
   }
  
  }

export default isDraggable;