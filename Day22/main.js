const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

let isActive = false;

menuIcon.addEventListener("click", () => {
  isActive = !isActive;
  if (isActive) {
    navMenu.style.display = "flex";
  } else {
    navMenu.style.display = "none";
  }
});
