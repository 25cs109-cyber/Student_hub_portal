const menuToggle = document.getElementById("menuToggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("menu-hidden");
});
// Collapsible FAQ

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {

    question.addEventListener("click", function() {

        const answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
            this.querySelector("span").textContent = "+";
        } 
        else {
            answer.style.display = "block";
            this.querySelector("span").textContent = "−";
        }

    });

    // Hamburger Menu

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", function() {
    mainNav.classList.toggle("menu-hidden");
});

});

