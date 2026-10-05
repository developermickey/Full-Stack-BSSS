const menu = document.getElementById("mobile-menu");
const menuDiv = document.querySelector(".mobile-menu-items");

let isActive = false;

menu.addEventListener("click", (e) => {
  console.log(window);
  e.preventDefault();
  isActive = !isActive;
  if (isActive) {
    console.log(isActive);
    menuDiv.style.display = "flex";
  } else {
    console.log(isActive);
    menuDiv.style.display = "none";
  }
});
