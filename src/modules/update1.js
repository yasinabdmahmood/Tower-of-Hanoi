import getId from './getId.js';
import data from './levelData.js';
import findStack from './findStack.js';

const update1 = (elmnt) => {
  const id = getId(elmnt);
  data.currentDragableId = id;
  data.currentDragableElement = elmnt;
  data.lastStack = findStack(elmnt);
};

export default update1;
