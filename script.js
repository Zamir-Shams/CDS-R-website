
'use strict';

// navbar toggles///////////////////////////////////////////////////////////////
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}




// nav & overlay when click any navbar-link //////////////////////////////////////////

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





// go to top ////////////////////////////////////////////////////////////////////////
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");
const cdsLogoContent = document.querySelectorAll("#change-color");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 500) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
    cdsLogoContent.forEach(function(evt){
      evt.style.textShadow = "none";
      evt.style.fontWeight = "normal";
    })
  
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
    cdsLogoContent.forEach(function(evt){
      evt.style.textShadow = "1px 1px 2px white, 0 0 1em white, 0 0 0.2em white";
      evt.style.fontWeight = "bolder";
    })
  }
});





// faq ////////////////////////////////////////////////////////////////////////

const faqBody = document.querySelectorAll(".faq-body");

 faqBody.forEach( function(evt) {
  evt.addEventListener("click", () => {
    evt.classList.toggle("active");
  })
 })





// cookies ///////////////////////////////////////////////////////////////////
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
const rejectButton = document.getElementById("reject-cookie");

cookieButton.addEventListener("click", () =>{
   cookieContainer.classList.remove("active");
   localStorage.setItem("cookieBannerDisplayed", "true");
})

setTimeout( () =>{
   if(!localStorage.getItem("cookieBannerDisplayed"))
   cookieContainer.classList.add("active");
}, 2000);


rejectButton.addEventListener("click", () => {
   cookieContainer.classList.remove("active");
})