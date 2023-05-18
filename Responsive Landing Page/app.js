const menu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger-menu');
  
    hamburger.addEventListener('click', function toggleButton() {
      menu.classList.toggle('active');
      hamburger.classList.toggle('active')
    });

 