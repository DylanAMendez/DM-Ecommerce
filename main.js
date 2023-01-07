
window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 550);
});

window.addEventListener("scroll", function(){
    var ul = document.querySelector("ul");
    ul.classList.toggle("stickyyy2", window.scrollY > 550);
});