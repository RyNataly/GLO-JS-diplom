export const slider = () => {
  const sliderBlock = document.querySelector(".top-slider");
  let slides = sliderBlock.querySelectorAll(".item");
  const dots = [];
  const sliderDots = document.querySelector(".dots");

  const timeInterval = 3000;
  let currentSlide = 0;
  let interval;

  const activeDot = (index, strClass) => {
    dots[index].classList.toggle(strClass);
  };

  const nextSlide = () => {
    slides = sliderBlock.querySelectorAll(".item");
    sliderBlock.insertBefore(slides[0], null);
  };

  const autoSlide = () => {
    activeDot(currentSlide, "dot-active");

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide();
    activeDot(currentSlide, "dot-active");
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
        if (index + 1 === currentSlide || index - 2 === currentSlide) {
          activeDot(currentSlide, "dot-active");
          currentSlide++;
          if (currentSlide >= slides.length) {
            currentSlide = 0;
          }
          nextSlide();
          currentSlide++;
          if (currentSlide >= slides.length) {
            currentSlide = 0;
          }
          nextSlide();
          activeDot(currentSlide, "dot-active");
        }
        if (index + 2 === currentSlide || index - 1 === currentSlide) {
          activeDot(currentSlide, "dot-active");
          currentSlide++;
          if (currentSlide >= slides.length) {
            currentSlide = 0;
          }
          nextSlide();
          activeDot(currentSlide, "dot-active");
        }
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

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot")) {
        stopSlide();
      }
    },
    true
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot")) {
        startSlide(timeInterval);
      }
    },
    true
  );

  StartDots();
  startSlide(timeInterval);
};
