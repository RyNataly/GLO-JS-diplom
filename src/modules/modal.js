export const modal = () => {
  const buttonCallbacks = document.querySelectorAll('.callback-btn')
  const modalCallback = document.querySelector('.modal-callback')
  const modalOverlay = document.querySelector('.modal-overlay')
  const modalClose = document.querySelector('.modal-close')

  const servicesCarousel = document.querySelector('.services-carousel')
//   .services-section .element .img-wrapper:before
  const elements = servicesCarousel.querySelectorAll('.element')  
//   const image = element.querySelector('.img-wrapper')

  buttonCallbacks.forEach(buttonCallback => buttonCallback.addEventListener('click', (e) => {
      e.preventDefault();   
      modalCallback.style.display = 'flex'
      modalOverlay.style.display = 'flex'
  }))

  modalClose.addEventListener('click', () => {
      modalCallback.style.display = 'none'
      modalOverlay.style.display = 'none'   
  })

  modalOverlay.addEventListener('click', () => {
      modalCallback.style.display = 'none'
      modalOverlay.style.display = 'none'   
  })

  elements.forEach(element => element.addEventListener('click', (e) => {
        e.preventDefault(); 
        modalCallback.style.display = 'flex'
        modalOverlay.style.display = 'flex'
  }))


  // element.addEventListener('click', (e) => {
  //       e.preventDefault(); 
  //       modalCallback.style.display = 'flex'
  //       modalOverlay.style.display = 'flex'
  // })
}