const container = document.querySelector(".users-container");
const themeBtn = document.querySelector(".theme");

function showSkeleton() {
  for (let index = 0; index < 9; index++) {
    container.innerHTML += `
        <div class="skeleton-card">
        <div class="skeleton avatar"></div>
        <div class="skeleton name"></div>
        <div class="skeleton email"></div>
        </div>
    `;
  }
}

async function fetchUsers() {
  const response = await fetch("https://dummyjson.com/users?limit=9");
  const data = await response.json();
  const users = data.users;

  container.innerHTML = "";
  users.forEach((user) => {
    container.innerHTML += `
      <div class="user-card">
        <img src="${user.image}" />
        <h3>${user.firstName}</h3>
        <p>${user.email}</p>
      </div>
    `;
  });
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light-mode";
  } else {
    themeBtn.textContent = "Dark-mode";
  }
});

showSkeleton();
fetchUsers();
