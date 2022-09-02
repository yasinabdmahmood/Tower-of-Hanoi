const resetProgress = () => {
  const warningMessage = `<span>If you reset progress you will be moved 
   to first level and loose your progress 
   permenantly   
</span>
<button class="confirm-reset">Confirm reset</button>`;
  document.querySelector('.warning').innerHTML = warningMessage;
  document.querySelector('.warning').style.display = 'flex';

  document.querySelector('.confirm-reset').onclick = () => {
    localStorage.setItem('level', '1');
    window.location.reload();
  };
};

export default resetProgress;