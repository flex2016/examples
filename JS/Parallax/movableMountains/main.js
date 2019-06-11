const app = document.querySelector(".app");
const elNav = document.querySelector(".ui-nav");

app.addEventListener("scroll", () => {
  const scroll = (2 * app.scrollTop) / app.clientHeight;
  app.style.setProperty("--scroll", scroll);

  if (scroll >= 0.01) {
    if (elNav.className.indexOf("-expanded") < 0) {
      console.log("adding class");
      elNav.classList.add("-expanded");
    }
  } else {
    elNav.classList.remove("-expanded");
  }
});
