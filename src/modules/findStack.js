import data from './levelData.js';
import getId from './getId.js';

const findStack = (elmnt) => {
  const id = getId(elmnt);
  if (data.stackA.indexOf(id) !== -1) { return 'A'; }
  if (data.stackB.indexOf(id) !== -1) { return 'B'; }
  if (data.stackC.indexOf(id) !== -1) { return 'C'; }
  return null;
};

export default findStack;