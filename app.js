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

// we have to add to the html file to active it

// This is the darkmode toggle

function change() {
    document.body.classList.toggle("dark-mode");


if (document.body.classList.contains('dark-mode')) {//when the body has the class 'dark' currently
    localStrorage.setItem('darkMode', 'enable'); //store this data if the darkmode is on
 
}
else {
    localStorage.setItem ('darkMode', 'disable'); // store this data when the dark mode is off
}
};

if (localStorage.getItem('darkMode') == 'enabled' ){
    document.body.classList.toggle('dark-mode');
}

//Draw with me function

//Cursors
