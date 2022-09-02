const decorateSideBar = (level) => {
  const arr = Array.from(document.querySelectorAll('.levels div'));
  for (let i = 0; i <= 7; i += 1) {
    const current = arr[i];

    if (i < level) {
      current.className = 'completed-level';
    } else if (i === level) {
      current.className = 'current-level';
    } else {
      current.className = 'following-level';
    }
  }
};

export default decorateSideBar;