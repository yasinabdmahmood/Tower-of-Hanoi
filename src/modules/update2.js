import data from './levelData.js';
import didWin from './didWin.js';

const update2 = (move) => {
  data.currentDragableId = null;
  data.currentDragableElement = null;
  data.lastStack = null;
  if (move === 'AB') {
    data.stackB.push(data.stackA.pop());
  }
  if (move === 'AC') {
    data.stackC.push(data.stackA.pop());
  }

  if (move === 'BA') {
    data.stackA.push(data.stackB.pop());
  }
  if (move === 'BC') {
    data.stackC.push(data.stackB.pop());
  }
  if (move === 'CB') {
    data.stackB.push(data.stackC.pop());
  }
  if (move === 'CA') {
    data.stackA.push(data.stackC.pop());
  }

  data.topDisks = [data.stackA[Object.values(data.stackA).length - 1],
    data.stackB[Object.values(data.stackB).length - 1],
    data.stackC[Object.values(data.stackC).length - 1]];

  if (didWin()) {
    document.querySelector('span').style.display = 'block';
    const currentLevel = JSON.parse(localStorage.getItem('level'));
    localStorage.setItem('level', JSON.stringify(currentLevel + 1));
    document.querySelector('.win').style.display = 'flex';
  }
};

export default update2;