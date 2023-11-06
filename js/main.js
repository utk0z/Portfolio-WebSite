

const header = document.querySelector(".header-navbar");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300 - headerHeight) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

const wrapperMenu = document.querySelector(".wrapper-menu");
const wrapperMenuList = document.querySelector(".wrapper-menu-list");

function toggleMenu() {
    wrapperMenu.classList.toggle("open");
    wrapperMenuList.classList.toggle("open");
}