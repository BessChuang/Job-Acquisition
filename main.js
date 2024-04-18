var realvh = window.innerHeight;
var realvw = window.innerWidth;
if (realvw < 1024 && (realvw / realvh < 1.0)) { realvw = realvh };

const navbtn = document.getElementById("navbtn"),
    navbtnbar = document.querySelector("header div div"),
    navm1 = document.getElementById("navm1"),
    navm2 = document.getElementById("navm2"),//m implies Mobile
    navMain = document.getElementById("navMain"),
    navExhibit = document.getElementById("navExhibit");

navbtn.addEventListener("click", function () {
    // if (navbtn.classList.contains("active")) {
    navbtn.classList.toggle("active");
    navbtnbar.classList.toggle("active");
    navm1.classList.toggle("active");
    navm2.classList.toggle("active");
    navMain.classList.toggle("active");
    navExhibit.classList.toggle("active");
    console.log(1);
});
