/*Menu nav */
document.querySelector(".menu-btn").addEventListener("click", () =>{
    document.querySelector(".nav-menu").classList.toggle("show");
});


/*efecto para imagenes y texto (scroll) https://scrollrevealjs.org/ */
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.news-cards', { delay: 500 });


ScrollReveal().reveal('.banner', { delay: 500 });
ScrollReveal().reveal('.banner1', { delay: 500 });
ScrollReveal().reveal('.banner2', { delay: 500 });


/*Realizado por Roman Gómez*/
/*website: www.roman-gomez.com*/