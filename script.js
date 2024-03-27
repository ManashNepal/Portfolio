const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeMenu = document.getElementById("nav-close");

toggleMenu.addEventListener("click",()=>{
  navMenu.classList.toggle("show")
})

closeMenu.addEventListener("click",()=>{
  navMenu.classList.remove("show")
})

const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
  navMenu.classList.remove("show");
}

navLink.forEach(n => n.addEventListener("click",linkAction));

const sections = document.querySelectorAll("section[id]");