const form = document.querySelector('.header__form')

form.addEventListener('submit', e => {
    e.preventDefault()
    const inputs = Array.from(form.getElementsByTagName('input'))
    inputs.push(document.querySelector('.msg__input'))
    inputs.forEach(el => el.value = '')
})