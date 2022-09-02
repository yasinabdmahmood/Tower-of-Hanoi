import data from './levelData.js';

const setUpLevelData = (n) => {
  for (let i = n; i >= 1; i -= 1) {
    data.stackA.push(i);
  }
};

export default setUpLevelData;