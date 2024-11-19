export const sendForm = () => {
  const form = document.querySelector("form[name=form-callback]");
  const inputText = form.querySelector("input[name=fio]");
  const inputTel = form.querySelector("input[name=tel]");
  const statusBlock = document.createElement("div");
  const loadText = "Идет отправка...";
  const errorText = "Ошибка...";
  const successText = "Отправлено! Наш менеджер с вами  свяжется!";

  //  проверка ввода имени
  inputText.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я]/, "");
  });

  //  проверка ввода номера телефона
  inputTel.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d\+]/, "");
  });

  const validate = (list) => {
    let success = 1;

    list.forEach((input) => {
      if (input.classList.contains("success")) {
        success++;
      }
    });
    return success === 3 ? true : false;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.parentElement.prepend(statusBlock);
    statusBlock.style.color = "#000";

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          setTimeout(() => statusBlock.remove(), 3000);

          formElements[0].value = "";
          formElements[1].value = "";
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          setTimeout(() => statusBlock.remove(), 3000);
        });
    } else {
      statusBlock.textContent = "Не все поля заполнены!!!";
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место, пожалуйста!!!");
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (inputText.value) {
        inputText.classList.add("success");
      } else {
        inputText.classList.remove("success");
      }

      if (inputTel.value) {
        inputTel.classList.add("success");
      } else {
        inputTel.classList.remove("success");
      }

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
