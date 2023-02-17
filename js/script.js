// Переменные - popup-menu //
const popupMenu = document.querySelector(".popup");
const menuOpenButton = document.querySelector(".header .header__navbar-menu");
const menuCloseButton = document.querySelector(".popup .popup__header-close");

// Открываем модальное окна //
function openPopupMenu(popupMenu) {
    popupMenu.classList.add("popup_opened");
}
// menuOpenButton - иконка открытия меню //
menuOpenButton.addEventListener("click", () => {
    openPopupMenu(popupMenu);
  });


// Закрываем модальное окна //
function closePopupMenu(popupMenu) {
    popupMenu.classList.remove("popup_opened");
}
// menuCloseButton - иконка закрытия меню
menuCloseButton.addEventListener("click", () =>
  closePopupMenu(popupMenu)
);
