// slider

const container = document.querySelector('.example__slider-wrapper');
document.querySelector('.example__range').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})
