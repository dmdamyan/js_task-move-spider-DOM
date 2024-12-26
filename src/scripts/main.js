'use strict';

document.addEventListener('click', (e) => {
  const img = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  img.style.top = e.clientY - img.clientHeight / 2 + 'px';
  img.style.left = e.clientX - img.clientWidth / 2 + 'px';
});
