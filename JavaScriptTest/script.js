const button = document.querySelector("#getUser");
const loadingText = document.querySelector("#loading");
const card = document.querySelector(".card");

const userImg = document.querySelector("#userImg");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const city = document.querySelector("#city");

button.addEventListener("click", function () {
  loadingText.style.display = "block";
  card.style.display = "none";

  fetch("users.json")
    .then((response) => response.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const user = data.results[randomIndex];

      userImg.src = user.picture.large;
      name.textContent = user.name.first + " " + user.name.last;
      email.textContent = "Email: " + user.email;
      city.textContent = "City: " + user.location.city;

      loadingText.style.display = "none";
      card.style.display = "block";
    })
    .catch((error) => {
      loadingText.style.display = "none";
      alert("Failed to load user");
    });
});
