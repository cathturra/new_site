import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

let offset = section.getBoundingClientRect().top - (window.innerHeight * 1.5) - getTranslate(section).y;
let limit = offset + section.getBoundingClientRect().height + window.innerHeight