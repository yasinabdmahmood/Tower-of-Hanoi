import gameSrart  from './modules/gameStart.js'
import decorateSideBar from './modules/decorateSideBar.js';
import resetProgress from './modules/resetProgress.js';

if(localStorage.getItem('level')===null){
  localStorage.setItem('level','1')
}

const level=JSON.parse(localStorage.getItem('level'))+2;
gameSrart(level);
decorateSideBar(level-3);
document.querySelector('.restart').onclick=()=>{
  window.location.reload();
}
document.querySelector('.reset').onclick=resetProgress;

document.querySelector('span').onclick=()=>{
  console.log('happened')
  window.location.reload();
}

document.querySelector('.win button').onclick=()=>{
  window.location.reload();
}



// const gameStart=(level)=>{
// setUpLevelData(level); 
// const disk=(id)=>`<div id="disk${id}" class="disk1">${id}</div>`;
// let disks=``;
// for(let i=level;i>=1;--i){ 
//  disks+=disk(i)
// }

// document.querySelector('.container').innerHTML=disks;

// const arr=Array.from(document.querySelectorAll('.disk1'))
// arr.forEach((el)=>{
//   dragElement(el,calc);
 
 
// })








// let i=level-1; 
// let id=setInterval(()=>{
//   let current=arr[i];
//   current.style.width=(23-2*i).toString()+'%' //level dependent
//   let position=calc(current,1,i+1);
//   myMove(current,...position)
//   i--;
//   if(i<0){
//     clearInterval(id)
//   }
  
// },50)

// }

