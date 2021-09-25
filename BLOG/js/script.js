var togglebutton = document.getElementsByClassName('toggle-button')[0]
var navlinks = document.getElementsByClassName('nav-contents')[0]

togglebutton.addEventListener("click", () => {
    togglebutton.classList.toggle('toggle');
    navlinks.classList.toggle('active');
}) 




