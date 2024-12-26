'use strict';

document.addEventListener('click', (e) => {
  const img = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  img.style.clientTop = e.clientY + img.clientHeight / 2;
  img.style.clientLeft = e.clientX + img.clientWidth / 2;
});
