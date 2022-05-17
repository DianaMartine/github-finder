// get elements
const user = document.getElementById("user");
const button = document.querySelector(".button");
const containerRespost = document.querySelector(".container-respost");
const bio = document.querySelector(".bio");
const img = document.querySelector(".img");
const publicRepos = document.querySelector(".public-repost");
const follwers = document.querySelector(".followers");

// prevent submit default
button.addEventListener("click", function (e) {
  e.preventDefault();
});

const getApi = async () => {
  // tratando erro de input
  if (user.value == "") {
    alert("Erro, insira o nome de usuário!");
  } else {
    // get api github
    const url = `https://api.github.com/users/${user.value}`;
    const data = await fetch(url);
    const userData = await data.json();

    if (userData.message == "Not Found") {
      alert("Erro, usuário não encontrado!");
    } else if (userData.bio != null) {
      // set visibility container-res and update elements
      containerRespost.setAttribute("style", "display: block;");
      bio.textContent = userData.bio;
      img.setAttribute("src", `${userData.avatar_url}`);
      publicRepos.textContent = `Respositórios: ${userData.public_repos}`;
      follwers.textContent = `Seguidores: ${userData.followers}`;
    } else if (userData.bio == null) {
      // update elements
      containerRes.setAttribute("style", "display: block");
      bio.setAttribute("style", "display: none;");
      img.setAttribute("src", `${userData.avatar_url}`);
      publicRepos.textContent = `Respositórios: ${userData.public_repos}`;
      follwers.textContent = `Seguidores: ${userData.followers}`;
    }
  }
};
