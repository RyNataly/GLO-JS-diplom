export const slider = () => {
  const sliderBlock = document.querySelector(".top-slider");
  let slides = sliderBlock.querySelectorAll(".item");
  const dots = [];
  const sliderDots = document.querySelector(".dots");

  let currentSlide = 0;
  let interval;

  const autoSlide = () => {
    slides = sliderBlock.querySelectorAll(".item");
    dots[currentSlide].classList.remove("dot-active");

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    sliderBlock.insertBefore(slides[0], null);
    dots[currentSlide].classList.add("dot-active");
  };

  const StartDots = () => {
    slides.forEach((slide, index) => {
      const dot = document.createElement("li");
      dot.className = "dot";
      if (index === 0) {
        dot.classList.add("dot-active");
      }
      sliderDots.appendChild(dot);
      dots.push(dot);

      dot.addEventListener("click", () => {
        console.log(dots);
      });
    });
  };

  const startSlide = (timer = 2000) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  slides.forEach((slide) => {
    slide.querySelector(".table").style.opacity = 1;
    slide.querySelector(".table").style.visibility = "visible";
  });

  StartDots();
  startSlide(3000);
};
