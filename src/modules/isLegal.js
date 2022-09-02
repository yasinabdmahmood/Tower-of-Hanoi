import data from './levelData.js';
import calc from './calc.js';
import myMove from './myMove.js';
import update2 from './update2.js';
import numberOfMoves from './numberOfMoves.js';

const isLegal = (move) => {
  const convertion = {
    A: 1,
    B: 2,
    C: 3,
  };
  const convert = (move) => convertion[move];
  const obj = {
    A: Object.values(data.stackA).length,
    B: Object.values(data.stackB).length,
    C: Object.values(data.stackC).length,

  };

  const obj2 = {
    A: data.stackA,
    B: data.stackB,
    C: data.stackC,
  };

  const source = obj2[move[0]][obj[move[0]] - 1];
  const destination = obj2[move[1]][obj[move[1]] - 1];
  let finalDestinationX;
  let finalDestinationY;

  if (!destination || source < destination) {
    finalDestinationX = convert(move[1]);
    finalDestinationY = obj[move[1]] + 1;

    const arr = calc(data.currentDragableElement, finalDestinationX, finalDestinationY);

    myMove(data.currentDragableElement, ...arr);
    update2(move);
    numberOfMoves();
  } else {
    finalDestinationX = convert(move[0]);
    finalDestinationY = obj[move[0]];

    const arr = calc(data.currentDragableElement, finalDestinationX, finalDestinationY);

    myMove(data.currentDragableElement, ...arr);
    update2(move[0] + move[0]);
  }
};

export default isLegal;