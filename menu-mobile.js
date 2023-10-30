let btnMenu = document.getElementById('btn-abrir-menu')
let menuMobile = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu-mobile')



btnMenu.addEventListener('click', ()=>{
    menuMobile.classList.add('abrir-menu-mobile');
})

menuMobile.addEventListener('click', ()=>{
    menuMobile.classList.remove('abrir-menu-mobile');
})

overlay.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu-mobile');
});