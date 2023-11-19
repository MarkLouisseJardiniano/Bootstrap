var options = {
    strings: ['Software Engineer','Web Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    loop:true
};
var typed = new Typed('.typing', options)





const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    
    hamburger.addEventListener('click', ()=>{
       //Animate Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
        });
    
        //Hamburger Animation
        hamburger.classList.toggle("toggle");
});