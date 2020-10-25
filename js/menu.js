const botaoMenu = document.getElementsByClassName('botao-menu')[0]
const menu = document.getElementsByClassName('menu')[0]
let menuAperto = false

botaoMenu.addEventListener('click', () => {
    if (menuAperto == false) {
        menu.style.transform = 'translateX(0%)'
        menuAperto = true
    } else if (menuAperto == true) {
        menu.style.transform = 'translateX(-100%)'
        menuAperto = false
    }
})