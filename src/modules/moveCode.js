import data from "./levelData.js";
import isLegal from "./isLegal.js";

const moveCode=(elmnt)=>{
 const st1=data.lastStack;
 let  st2=null;
 const x=elmnt.offsetLeft+elmnt.offsetWidth/2;
 const conWidth=elmnt.parentNode.offsetWidth;

 if(x<conWidth/3){
   st2="A";
 }
 else if(x<2*conWidth/3){
    st2="B";
 }
 else{
    st2='C'
 }
 const move=st1+st2;
 
 isLegal(move);

}

export default moveCode;