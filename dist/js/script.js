// /Navbar Scroll
window.addEventListener("scroll", function () {
  // /Navbar Scroll
  window.addEventListener("scroll", function () {
    const headerElement = document.querySelector("header");
    const headerRect = headerElement.getBoundingClientRect();
    const fixedNav = headerRect.top; // atau langsung headerRect.top

    if (window.scrollY > fixedNav) {
      headerElement.classList.add("navbar-fixed");
    } else {
      headerElement.classList.remove("navbar-fixed");
      console.info(false);
    }
  });
});

const humberger = document.querySelector("#humberger");
const navMenu = document.querySelector("#nav-menu");

humberger.addEventListener("click", function () {
  humberger.classList.toggle("humberger-active");
  navMenu.classList.toggle("hidden");
});
