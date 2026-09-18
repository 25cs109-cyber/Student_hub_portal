let images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
];



let texts = [
    "Join us for exciting campus activities.",
    "Take part in various college activities.",
    "Enjoy your college life and create memories.",
    "Celebrate and enjoy events with your friends."
];

let current = 0;

let slideImage = document.getElementById("slideImage");
let slideTitle = document.getElementById("slideTitle");
let slideText = document.getElementById("slideText");

let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let dots = document.getElementById("dots");


function showSlide() {

    slideImage.src = images[current];

    slideTitle.innerText = titles[current];

    slideText.innerText = texts[current];

    dots.innerHTML = "";

    for (let i = 0; i < images.length; i++) {

        let dot = document.createElement("span");

        dot.innerHTML = "●";

        dot.style.margin = "5px";

        dot.style.cursor = "pointer";

        if (i == current) {
            dot.style.color = "#2b6cb0";
        } else {
            dot.style.color = "#cbd5e0";
        }

        dot.onclick = function () {

            current = i;

            showSlide();

        };

        dots.appendChild(dot);
    }
}


/* Next Button */

nextBtn.onclick = function () {

    current++;

    if (current >= images.length) {
        current = 0;
    }

    showSlide();
};


/* Previous Button */

prevBtn.onclick = function () {

    current--;

    if (current < 0) {
        current = images.length - 1;
    }

    showSlide();
};


/* Show First Image */

showSlide();