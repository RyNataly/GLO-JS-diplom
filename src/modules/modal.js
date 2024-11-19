export const modal = () => {
  const buttonCallbacks = document.querySelectorAll(".callback-btn");
  const modalCallback = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");
  const servicesCarousel = document.querySelector(".services-carousel");
  const elements = servicesCarousel.querySelectorAll(".element");
  const buttonServices = document.querySelector(".button-services");

  const modalView = () => {
    modalCallback.style.display = "flex";
    modalOverlay.style.display = "flex";
  };

  const modalHide = () => {
    modalCallback.style.display = "none";
    modalOverlay.style.display = "none";
  };

  buttonCallbacks.forEach((buttonCallback) =>
    buttonCallback.addEventListener("click", (e) => {
      e.preventDefault();
      modalView();
    })
  );

  modalClose.addEventListener("click", () => {
    modalHide();
  });

  modalOverlay.addEventListener("click", () => {
    modalHide();
  });

  elements.forEach((element) =>
    element.addEventListener("click", (e) => {
      e.preventDefault();
      modalView();
    })
  );

  buttonServices.addEventListener("click", (e) => {
    e.preventDefault();
    modalView();
  });
};
