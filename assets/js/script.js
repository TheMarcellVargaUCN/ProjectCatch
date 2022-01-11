const hamburger = document.querySelector(".navbar-hamburger");
const navMenu = document.querySelector(".navbar-links");


hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("translate-x-0");
    navMenu.classList.toggle("translate-x-0");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function notifications() {
    let bell = document.getElementById('bell');
    
    if (bell.style.display === "block") {
        bell.style.display = "none";
    } else{
        bell.style.display = "block";
    }
}

function selectedButton() {
    let empty = document.getElementById('empty-el');
    let circle = document.getElementById('selected-el');
    
    if (circle.style.display === "block") {
        circle.style.display = "none";
        empty.style.display = "block";
    } else{
        circle.style.display = "block";
        empty.style.display = "none";
    }
}