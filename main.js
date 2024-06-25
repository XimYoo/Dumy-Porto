/* Toggle Navbar Icon */


let menuIconIcon = document.querySelector('#Menu-Icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* scroll section active link */

let sections = document.querySelectorAll('Section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* sticky navbar */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* sticky navbar */

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');


};

    /* Scroll Reveal Effect */

    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
    ScrollReveal().reveal('.home-img, .Services-container, .Project-box, .Contact form', { origin: 'buttom'});
    ScrollReveal().reveal('.home-contact h1, .About-img', { origin: 'left'});
    ScrollReveal().reveal('.home-contact p, .About-content', { origin: 'right'});