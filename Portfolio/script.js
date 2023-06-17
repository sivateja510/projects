
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+']').classList.add('active');
            })
        }
    })
let header=document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY>100);
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

let darkmodeIcon=document.querySelector('#darkmode-icon');
darkmodeIcon.onclick=()=>{
    darkmodeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('darkmode');
}
ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img img,.about-img img,.skills-container,.portfolio-box,.contact-form',{origin:'bottom'});
ScrollReveal().reveal('.about-img img,.home-content h1',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content,.home-content h3,.contact',{origin:'top'});
var swiper=new Swiper(".mySwiper",{
    slidesPerView:1,
    spaceBetween:50,
    loop:true,
    grabCursor:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,     
    },
    navigation:{
        nextEl:".swiper-button-next",
        pervEl:".swiper-button-prev",
    },
});


