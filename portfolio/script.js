function scrollTo(section) {
    document.getElementById(section).scrollIntoView({
        behavior: "smooth"
    });
}
document.getElementById("nav-home").addEventListener("click", function() {
    scrollTo("home");
});
document.getElementById("nav-about").addEventListener("click", function() {
    scrollTo("about");
});     