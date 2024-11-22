import { polyfill } from "seamless-scroll-polyfill";

export const menu = () => {
  const topMenus = document
    .querySelector(".top-menu")
    .querySelectorAll("ul>li>a");

  // topMenus.forEach((topMenu, index) =>
  //   topMenu.addEventListener("click", (e) => {
  //     seamless.polyfill();
  //     if (index === 0) {
  //       seamless.scrollIntoView(document.querySelector("#services"), {
  //         behavior: "smooth",
  //         block: "center",
  //         inline: "center",
  //       });
  //     } else if (index === 1) {
  //       seamless.scrollIntoView(document.querySelector("#faq"), {
  //         behavior: "smooth",
  //         block: "center",
  //         inline: "center",
  //       });
  //     } else if (index === 2) {
  //       seamless.scrollIntoView(document.querySelector("#contacts"), {
  //         behavior: "smooth",
  //         block: "center",
  //         inline: "center",
  //       });
  //     }
  //   })
  // );

  let idInterval;
  let top = document.documentElement.scrollTop;
  let height;

  const animateDown = () => {
    idInterval = requestAnimationFrame(animateDown);
    top = document.documentElement.scrollTop;

    if (top < height) {
      document.documentElement.scrollTop = top + 30;
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  const animateUp = () => {
    idInterval = requestAnimationFrame(animateUp);
    top = document.documentElement.scrollTop;

    if (top > height) {
      document.documentElement.scrollTop = top - 30;
    } else {
      cancelAnimationFrame(idInterval);
    }
  };

  topMenus.forEach((topMenu, index) =>
    topMenu.addEventListener("click", (e) => {
      e.preventDefault();
      top = document.documentElement.scrollTop;
      if (index === 0) {
        height = 615;
      } else if (index === 1) {
        height = 3100;
      } else if (index === 2) {
        height = 3810;
        if (
          document.documentElement.clientHeight >
          document.documentElement.scrollHeight - height
        ) {
          height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight -
            5;
        }
      }

      if (top < height) {
        animateDown();
      } else {
        animateUp();
      }
    })
  );
};
