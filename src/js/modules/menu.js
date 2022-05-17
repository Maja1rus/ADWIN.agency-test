export function headerMenu(className) {
    const menuNav = className.querySelector('.header__wrap');
    const menuBtn = className.querySelector('.btn__menu');
    const btnIcon = menuBtn.querySelector('.btn__icon');

    menuBtn.addEventListener('click', menuHandler);


    function menuHandler() {
        if (!menuNav.classList.contains('active')) {
            menuActive();
            disableScroll();
            window.addEventListener('keydown', escapeHandler);
        } else {
            menuClose();
            enableScroll();
        }
    }

    function menuActive() {
        btnIcon.classList.add('active');
        menuNav.classList.add('active');   
    }

    function menuClose() {
        btnIcon.classList.remove('active');
        menuNav.classList.remove('active');
    }

    function disableScroll() {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        document.body.classList.add('modal-open')
        document.body.style.paddingRight = paddingOffset;
    }

    function enableScroll() {
        document.body.classList.remove('modal-open')
        document.body.style.removeProperty('padding-right');
    }

    function escapeHandler(e) {
        // закрытие меню по кнопке escape
        if (e.key === 'Escape') {
            menuClose();
            enableScroll();
        }
    }

}