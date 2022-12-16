const root = document.querySelector(":root");
const body = document.querySelector("body");
const homeBackground = document.querySelector("#home");

function changeTheme(){
    if (body.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#f5f5f5")
        root.style.setProperty("--bg-radical-color", "#ffffff")
        root.style.setProperty("--contrast-color", "#292b2c")
        homeBackground.style.setProperty("background-image", "url('../images/bg-home-light.webp')")
        body.dataset.theme = "light"
      } else {
        root.style.setProperty("--bg-color", "#292b2c")
        root.style.setProperty("--bg-radical-color", "#000000")
        root.style.setProperty("--contrast-color", "#f5f5f5")
        homeBackground.style.setProperty("background-image", "url('../images/bg-home-dark.webp')")
        body.dataset.theme = "dark"
      }
}
