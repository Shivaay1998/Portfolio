// Preloader

let loader = document.querySelector(".preloader")
  
window.addEventListener("load", ()=>{
    loader.style.display = "none"
})

// For responsive navbar
let header = document.querySelector('header')
let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky', window.scrollY > 0)
})
menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
window.onscroll = ()=>{
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}
// Typing Effects
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
var typed1 = new Typed(".typed", {
    strings: ["Web Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

// Scrollig Effects

AOS.init({
    offset: 100,
    once: false,
    mirror: false,
});


//shivaay1998.github.io/Portfolio/
