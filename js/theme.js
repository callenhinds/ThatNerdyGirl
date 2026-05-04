const themes = ["dark", "light", "fun"];
let currentTheme = 0;

document.body.classList.add(themes[currentTheme]);

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.remove(themes[currentTheme]);

  currentTheme = (currentTheme + 1) % themes.length;

  document.body.classList.add(themes[currentTheme]);
});
