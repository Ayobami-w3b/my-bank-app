const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");


// OPEN MOBILE MENU

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.add("active");

    document.body.style.overflow = "hidden";

});


// CLOSE MOBILE MENU

closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    document.body.style.overflow = "";

});


// CLOSE MENU WHEN LINK IS CLICKED

document.querySelectorAll(".mobile-links a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.style.overflow = "";

    });

});