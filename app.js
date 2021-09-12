const menu = document.querySelector ('#mobile-menu') // Want to tranform the hamberger
const menuLinks = document.querySelector('.navbar__menu')

//Display mobil Menu

// We create a function that add a class reactive with the class we have

//The class is_active

const mobileMenu = () => { 
    menu.classList.toggle('is-active')//Think like bool - active or not active
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// we have to add to the html file to acgive it