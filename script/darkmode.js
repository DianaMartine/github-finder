const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");

btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "") {
    theme.href = "./style/dark-theme.css";
    btn.value = "Light Mode 🌞";
  } else {
    theme.href = "";
    btn.value = "Dark Mode 🌙";
  }
});