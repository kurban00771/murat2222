const waLinks = document.querySelectorAll(".protected-wa");
if (waLinks.length > 0) {
  const decodedWa = atob("aHR0cHM6Ly93YS5tZS83OTI4ODIyNDA0OQ==");
  waLinks.forEach((link) => {
    link.href = decodedWa;
  });
}

const maxLinks = document.querySelectorAll(".protected-max");
if (maxLinks.length > 0) {
  // Зашифрованная ссылка https://max.ru/u/f9LHodD0cOLhQGPR8wrs-o9vRfMrIZhhbNwx_mllE7AVV90fwbO58NVgVIo
  const decodedMax = atob("aHR0cHM6Ly9tYXgucnUvdS9mOUxIb2REMGNPTGhRR1BSOHdycy1vOXZSZk1ySVpoaGJOd3hfbWxsRTdBVlY5MGZ3Yk81OE5WZ1ZJbw==");
  maxLinks.forEach((link) => {
    link.href = decodedMax;
  });
}

const phoneLinks = document.querySelectorAll(".protected-phone");
if (phoneLinks.length > 0) {
  phoneLinks.forEach(function (phoneLink) {
    const decodedPhoneLink = atob("Kzc5Mjg4MjI0MDQ5"); 
  
    phoneLink.href = "tel:" + decodedPhoneLink;
  
    if (phoneLink.textContent.trim() === "Показать телефон") {
      const decodedPhoneText = atob("KzcgKDkyOCkgODIyIDQwIDQ5"); 
      phoneLink.textContent = decodedPhoneText;
    }
  });
}

const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

if (menuBtn && menu) {
  // Открытие/закрытие мобильного меню
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("menu--active");
    menuBtn.classList.toggle("menu__btn--active");
    document.body.classList.toggle("no-scroll");
  });

  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }

      if (menu.classList.contains("menu--active")) {
        menu.classList.remove("menu--active");
        menuBtn.classList.remove("menu__btn--active");
        document.body.classList.remove("no-scroll");
      }
    });
  });
}