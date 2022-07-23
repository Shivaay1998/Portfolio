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
        Username : "shiv240898@gmail.com",
        Password : "73CF2204788FFA714C021BC4F8CC72E1F307",
        To : 'kab240898@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

//shivaay1998.github.io/Portfolio/
