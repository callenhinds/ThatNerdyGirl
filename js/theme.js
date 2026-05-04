const themes = ["light", "dark", "fun"];
let currentTheme = 0;

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.remove(themes[currentTheme]);

  currentTheme = (currentTheme + 1) % themes.length;

  document.body.classList.add(themes[currentTheme]);
});
