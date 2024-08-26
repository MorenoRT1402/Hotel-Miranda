const hamburgerMenu = document.getElementById("home-menu-hamburger");
const closeMenu = document.getElementById("home-menu-close");
const displayedMenu = document.getElementById('home-displayed-menu');

const INACTIVE_CLASS = '--invisible';

const active = (Element, active) => {
    if(active) Element.classList.add(INACTIVE_CLASS);
    else Element.classList.remove(INACTIVE_CLASS);
}

hamburgerMenu.addEventListener('click', () => {
    displayedMenu.style.display = 'flex';
    active(hamburgerMenu, true);
    active(closeMenu, false);
})

closeMenu.addEventListener('click', () => {
    displayedMenu.style.display = 'none';
    active(hamburgerMenu, false);
    active(closeMenu, true);
})