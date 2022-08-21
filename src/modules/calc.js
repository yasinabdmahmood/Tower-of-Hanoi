function calc(elmnt,x=1,y=1){
   let shift=null;
   const width=document.querySelector('.container').offsetWidth;
   const height=document.querySelector('.container').offsetHeight;
   
   if(x==1){shift=-width/10};
   if(x==3){shift=width/10};
   const xx=x*width/4-elmnt.offsetWidth/2;
   const yy=(y-1)*elmnt.offsetHeight;
   return [xx+shift,height- yy-elmnt.offsetHeight]
  }

  export default calc;