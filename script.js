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
    strings: ["UI Designer", "Web Developer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
var typed1 = new Typed(".typed", {
    strings: ["UI Designer", "Web Developer", "Programmer"],
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

// for sending email's

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kab240898@gmail.com",
        Password : "54DC6298A7DABAD424A18B97D024B5BA2A9C",
        To : 'shiv240898@gmail.com',
        From : "singhkab240898@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

//shivaay1998.github.io/Portfolio/
