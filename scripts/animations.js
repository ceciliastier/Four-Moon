//hide/show header
const hero = document.querySelector('.hero');
const header = document.querySelector('header')
const heroHeight = hero.offsetHeight;
window.addEventListener('scroll', () => {
    if (this.scrollY > heroHeight) {
        header.classList.add('reveal')
    } else {
        header.classList.remove('reveal')
    }
})

const windowHeight = window.innerHeight;

//main children
const titles = document.querySelectorAll('h3:not(.contact h3)')
const aboutText = document.querySelectorAll('#about p');
const gallery = document.querySelector('.gallery-container')
const galleryImgs = document.querySelectorAll('.gallery-container div')
const testimonails = document.querySelectorAll('.testimonials-container figure')
const teamMembs = document.querySelectorAll('.team-container section')
const locationElems = document.querySelectorAll('.locations-container > *:not(h3)')

const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= (windowHeight || document.documentElement.clientHeight)
    );
};

const handleAnimate = (elem) => {
    window.addEventListener('scroll', () => {
        if (elementInView(elem)) {
            elem.classList.add('animate')
        } else {
            elem.classList.remove('animate')
        }
    })

}

titles.forEach(title => {
    handleAnimate(title)
})
aboutText.forEach(aboutText => {
    handleAnimate(aboutText)
})
galleryImgs.forEach(img => {
    handleAnimate(img)
})
handleAnimate(gallery)
testimonails.forEach(testimonail => {
    handleAnimate(testimonail)
})
teamMembs.forEach(mem => {
    handleAnimate(mem)
})
locationElems.forEach(locationElem => {
    handleAnimate(locationElem)
})
