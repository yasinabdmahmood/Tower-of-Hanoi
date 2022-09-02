import dragElement from './dragElement.js';
import calc from './calc.js';
import myMove from './myMove.js';
import setUpLevelData from './setUpLevelData.js';

const gameStart = (level) => {
  setUpLevelData(level);
  const disk = (id) => `<div id="disk${id}" class="disk1">${id}</div>`;
  let disks = '';
  for (let i = level; i >= 1; i -= 1) {
    disks += disk(i);
  }
  disks += `<div class="base b1" ></div>
<div class="base b2" ></div>
<div class="base b3" ></div>`;

  document.querySelector('.container').innerHTML = disks;

  const arr = Array.from(document.querySelectorAll('.disk1'));
  arr.forEach((el) => {
    dragElement(el, calc);
  });

  let i = level - 1;
  const id = setInterval(() => {
    const current = arr[i];
    current.style.width = `${(23 - 2 * i).toString()}%`; // level dependent
    const position = calc(current, 1, i + 1);
    myMove(current, ...position);
    i -= 1;
    if (i < 0) {
      clearInterval(id);
    }
  }, 50);
};

export default gameStart;
