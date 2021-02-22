const menuButton = document.querySelector('.menu-icon');
const menu = document.querySelector('nav ul');

menuButton.addEventListener('click', function () {
    menu.classList.toggle('menu-show');
})