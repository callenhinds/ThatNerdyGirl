
const themes = ["light", "dark", "fun"];
let currentTheme = localStorage.getItem("themeIndex") || 0;

document.body.classList.add(themes[currentTheme]);

const btn = document.getElementById("themeBtn");

if (btn) {
  btn.addEventListener("click", () => {
    document.body.classList.remove(themes[currentTheme]);

    currentTheme = (Number(currentTheme) + 1) % themes.length;

    document.body.classList.add(themes[currentTheme]);
    localStorage.setItem("themeIndex", currentTheme);
  });
}
