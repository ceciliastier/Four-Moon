// Mobile nav
const navPanelOpen = document.querySelector('.open-mobile-nav');
const navPanelClose = document.querySelector('.close')
const mobileNavPanel = document.querySelector('.mobile-nav-panel ul');
const navLinks = document.querySelectorAll('.mobile-nav-panel ul li')

navPanelOpen.addEventListener('click', () => {
    mobileNavPanel.classList.add('open');
    document.body.style.overflow = 'hidden' //prevent background scrolling
})

navPanelClose.addEventListener('click', () => {
    mobileNavPanel.classList.remove('open');
    document.body.style.overflow = 'auto'
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNavPanel.classList.remove('open');
        document.body.style.overflow = 'auto'
    })
})