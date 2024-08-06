const contactBtn = document.querySelector('.contact__btn')

contactBtn.addEventListener('click', () => {
    const gotoBlock = document.querySelector('.contact').getBoundingClientRect().top + scrollY - document.querySelector('.header__navbar').offsetHeight

    window.scrollTo({
        top: gotoBlock,
        behavior: 'smooth'
    })
})