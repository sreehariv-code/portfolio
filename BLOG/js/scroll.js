document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const link = document.querySelectorAll(".target");
    let logo = document.getElementById("owner");
    console.log(logo);
    const sectionhero = document.querySelector(".hero-container");
    console.log(link.length);
    const sectionheroopt = {
        rootMargin: "-200px 0px 0px 0px"
    };

    const sectionheroobserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            console.log(entry.target);
            if (!entry.isIntersecting) {
                navbar.classList.add("nav-scroll");
                logo.classList.add("nav-scroll");
                link.forEach(link => {
                    {
                        link.classList.add("nav-scroll");
                    }
                });
            } else {
                navbar.classList.remove("nav-scroll");
                logo.classList.remove("nav-scroll");
                link.forEach(link => {
                    {
                        link.classList.remove("nav-scroll");
                    }
                });
            }
        })
    }, sectionheroopt);

    sectionheroobserver.observe(sectionhero);
});