export const accordeon = () => {
    const accordeon = document.querySelector('.accordeon')
    const elements = accordeon.querySelectorAll('.element')

    elements.forEach(element => element.addEventListener('click', (e) => {
        const elOpen = accordeon.querySelector('.active')
        let elContent = elOpen.querySelector('.element-content');
        if (e.target !== elOpen) {
            elOpen.classList.toggle('active')
            elContent.style.display = 'none'
            elContent = element.querySelector('.element-content');
            element.classList.toggle('active')
            elContent.style.display = 'block'
        }
    }))
}