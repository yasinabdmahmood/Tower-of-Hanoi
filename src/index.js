import gameSrart from './modules/gameStart.js';
import decorateSideBar from './modules/decorateSideBar.js';
import resetProgress from './modules/resetProgress.js';

if (localStorage.getItem('level') === null) {
  localStorage.setItem('level', '1');
}

const level = JSON.parse(localStorage.getItem('level')) + 2;
gameSrart(level);
decorateSideBar(level - 3);
document.querySelector('.restart').onclick = () => {
  window.location.reload();
};
document.querySelector('.reset').onclick = resetProgress;

document.querySelector('span').onclick = () => {
  window.location.reload();
};

document.querySelector('.win button').onclick = () => {
  window.location.reload();
};
