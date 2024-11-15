export const modal = () => {
  const buttonCallbacks = document.querySelectorAll('.callback-btn')
  const modalCallback = document.querySelector('.modal-callback')
  const modalOverlay = document.querySelector('.modal-overlay')
  const modalClose = document.querySelector('.modal-close')

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
}