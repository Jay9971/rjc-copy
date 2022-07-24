//defining functions
    //intro
const intro_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('intro-animation')
        }
    });
});

   //retributive
const try_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ret-pic-animation')
        }
    });
});
const ret_title_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ret_title_animate')
        }
    });
});
const retpar_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('retpar-animate')
        }
    });
});

    //restorative
const respar_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('respar-animate')
        }
    });
});
const res_title_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('res_title_animate')
        }
    });
});
const res_pic_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('res_pic_animate')
        }
    });
});

    //transformative
const transpar_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('transpar-animate')
        }
    });
});
const trans_title_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('trans_title_animate')
        }
    });
});
const trans_pic_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('trans_pic_animate')
        }
    });
});



//calling functions
try_observer.observe(document.querySelector('.ret_pic'));
ret_title_observer.observe(document.querySelector('.ret_title'));
retpar_observer.observe(document.querySelector('.retpar'));
respar_observer.observe(document.querySelector('.respar'));
res_title_observer.observe(document.querySelector('.res_title'));
res_pic_observer.observe(document.querySelector('.talk'));
transpar_observer.observe(document.querySelector('.transpar'));
trans_title_observer.observe(document.querySelector('.trans_title'));
trans_pic_observer.observe(document.querySelector('.trans_pic'));
intro_observer.observe(document.querySelector('.intro'));