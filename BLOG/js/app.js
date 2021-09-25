document.addEventListener("DOMContentLoaded", function() {

    const slider = document.querySelector(".slider");
    const nextbtn = document.querySelector(".next-btn");

    const prevbtn = document.querySelector(".prev-btn");

    const slide = document.querySelectorAll(".slide");

    const slideIcons = document.querySelectorAll(".slide-icon");
    const numberOfSlides = slide.length;
    var slideNumber = 0;

    //Recommmendation carousel next button
    nextbtn.addEventListener("click", () => {
        slide.forEach((slides) => {
            slides.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber++;

        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }
        slide[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    });

    //Recommmendation carousel prev button
    prevbtn.addEventListener("click", () => {
        slide.forEach((slides) => {
            slides.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });

        slideNumber--;

        if (slideNumber < 0) {
            slideNumber = numberOfSlides - 1;
        }
        slide[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    });

    //Recommmendation carousel autoplay
    var playSlider;
    var repeater = () => {
        playSlider = setInterval(function() {
            slide.forEach((slides) => {
                slides.classList.remove("active");
            });
            slideIcons.forEach((slideIcon) => {
                slideIcon.classList.remove("active");
            });

            slideNumber++;

            if (slideNumber > (numberOfSlides - 1)) {
                slideNumber = 0;
            }
            slide[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
        }, 2000);
    }
    repeater();

    //stop autoplay on mouse hover

    slider.addEventListener("mouseover", () => {
        clearInterval(playSlider);
    });

    slider.addEventListener("mouseout", () => {
        repeater();
    });

})