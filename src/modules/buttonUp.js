export const buttonUp = () => {
  const butUp = document.querySelector(".up");
  let top = document.documentElement.scrollTop;
  let idInterval;

  const animateUp = () => {
    idInterval = requestAnimationFrame(animateUp);
    top = document.documentElement.scrollTop;

    if (top > 0) {
      document.documentElement.scrollTop = top - 70;
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  document.addEventListener("scroll", () => {
    top = document.documentElement.scrollTop;
    if (top < 615) {
      butUp.style.display = "none";
    } else {
      butUp.style.display = "block";
    }
  });

  butUp.addEventListener("click", () => {
    animateUp();
  });

  butUp.style.display = "none";
};
