
var gradient = new Gradient();
gradient.initGradient("#canvas");

function nav() {
    const show = document.querySelector('.nav__burger');
    const navMenu = document.querySelector('.nav__menu');
    const hide = document.querySelector('.fa-times');

    show.addEventListener('click', () => {
            navMenu.classList.add('active');
            //Animate Menu
        });

    hide.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

}

nav();

function about(){
    const columns = document.querySelectorAll(".about__column");
    const terminals = document.querySelectorAll(".about__terminal");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
            });
        },
        {
        threshold:0.25
        }
    )

    columns.forEach(column => {
        observer.observe(column);
    });

    terminals.forEach(terminal => {
        observer.observe(terminal);
    });
}

about();

function service(){
    const columns = document.querySelectorAll(".service__column");

    const  appearOnScroll = new IntersectionObserver(
        entries => {
            entries.forEach(entry =>{
                entry.target.classList.toggle("appear", entry.isIntersecting)
                if (entry.isIntersecting) appearOnScroll.unobserve(entry.target)
            });
        },
        {
        threshold:1
        }
    )
    columns.forEach(column => {
        appearOnScroll.observe(column)
    });
}

service();