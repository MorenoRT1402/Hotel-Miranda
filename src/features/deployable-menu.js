const hamburgerMenu = document.getElementById("home-menu-hamburger");
const closeMenu = document.getElementById("home-menu-close");
const displayedMenu = document.getElementById('header__menu');

const INACTIVE_CLASS = '--invisible';

const active = (Element, active) => {
    if(active) Element.classList.add(INACTIVE_CLASS);
    else Element.classList.remove(INACTIVE_CLASS);
}

hamburgerMenu.addEventListener('click', () => {
    active(displayedMenu, false);
    active(hamburgerMenu, true);
    active(closeMenu, false);
})

closeMenu.addEventListener('click', () => {
    active(displayedMenu, true);
    active(hamburgerMenu, false);
    active(closeMenu, true);
})