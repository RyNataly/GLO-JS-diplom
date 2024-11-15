export const modal = () => {
  const buttonCallbacks = document.querySelectorAll('.callback-btn')
  const modalCallback = document.querySelector('.modal-callback')
  const modalOverlay = document.querySelector('.modal-overlay')

  buttonCallbacks.forEach(buttonCallback => buttonCallback.addEventListener('click', (e) => {
      e.preventDefault();   
      modalCallback.style.display = 'flex'
      modalOverlay.style.display = 'flex'
      console.log(modalOverlay)
  }))
  
}