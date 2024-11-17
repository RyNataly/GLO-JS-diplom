import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const services = () => {
  const arrowLeft = document.querySelector('.arrow-left')
  const arrowRight = document.querySelector('.arrow-right')
  const servicesCarousel = document.querySelector('.services-carousel')
  let elements = servicesCarousel.querySelectorAll('.swiper-slide')  

  const swiper = new Swiper('.swiper', {
      modules: [Navigation],
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
  });

  arrowLeft.addEventListener('click', () => { 
      elements = servicesCarousel.querySelectorAll('.swiper-slide')
     let index = 0;
          if (elements[index].matches('.swiper-slide-active')){
              if (elements[index+5].matches('.swiper-slide-prev')) {
                      elements[index+5].classList.remove('swiper-slide-prev')
              }  
              elements[index].classList.remove('swiper-slide-active')
              elements[index].classList.add('swiper-slide-prev')
              elements[index+1].classList.remove('swiper-slide-next')
              elements[index+1].classList.add('swiper-slide-active')
              elements[index+2].classList.add('swiper-slide-next');
              servicesCarousel.insertBefore(elements[0], null);
      }
  })

  arrowRight.addEventListener('click', () => {
      elements = servicesCarousel.querySelectorAll('.swiper-slide')
      if (elements[0].matches('.swiper-slide-active')){
              servicesCarousel.insertBefore(elements[5], elements[0]);   
              elements = servicesCarousel.querySelectorAll('.swiper-slide')
              elements[1].classList.remove('swiper-slide-active')
              elements[1].classList.add('swiper-slide-next')
              elements[0].classList.remove('swiper-slide-prev')
              elements[0].classList.add('swiper-slide-active')
              elements[2].classList.remove('swiper-slide-next');
              elements[5].classList.add('swiper-slide-prev');
      }
  })

}