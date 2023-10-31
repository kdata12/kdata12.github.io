document.getElementById('hamburger-button').addEventListener('click', () => {
  const nav = document.querySelector('nav');
  console.log(nav)

  if (nav.classList.contains('hidden')) {
    nav.classList.remove('hidden');
    nav.style.display = 'block';
  } else {
    nav.classList.add('hidden');
    nav.style.display = 'none';
  }
})