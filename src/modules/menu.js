export const menu = () => {
    const topMenus = document.querySelector('.top-menu').querySelectorAll('ul>li>a')
    
    let idInterval
    let top = document.documentElement.scrollTop
    let height

    const animateDown = () => {
        idInterval = requestAnimationFrame(animateDown)
        top = document.documentElement.scrollTop
       
        if (top < height) {
            document.documentElement.scrollTop = top + 30
        } else {
            cancelAnimationFrame(idInterval)
        }
    }

    const animateUp = () => {
        idInterval = requestAnimationFrame(animateUp)
        top = document.documentElement.scrollTop
       
        if (top > height) {
            document.documentElement.scrollTop = top - 30
        } else {
            cancelAnimationFrame(idInterval)
        }
    }

    topMenus.forEach((topMenu, index) => topMenu.addEventListener('click', (e) => {
        e.preventDefault(); 
        top = document.documentElement.scrollTop
        if (index === 0) {
            height = 615
        } else if (index === 1) {
            height = 3100
        }else if (index === 2) {
            height = 3810
        }

        if (top < height) {
            animateDown()
        } else {
            animateUp()
        }
        console.dir(index)
    }) )
}
