document.querySelector("#year").textContent = new Date().getFullYear();

const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");
const navigationScrim = document.querySelector(".nav-scrim");

function setNavigationOpen(isOpen, restoreFocus = false) {
  siteHeader.classList.toggle("menu-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");

  if (!isOpen && restoreFocus) {
    menuToggle.focus();
  }
}

menuToggle.addEventListener("click", () => {
  setNavigationOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigationScrim.addEventListener("click", () => setNavigationOpen(false, true));

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setNavigationOpen(false, true);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setNavigationOpen(false, true);
  }
});

window.matchMedia("(min-width: 651px)").addEventListener("change", (event) => {
  if (event.matches) {
    setNavigationOpen(false);
  }
});
