var menuBtn = document.getElementById("mickey");
var sidebar = document.querySelector(".sidebar");
let isActive = false;
menuBtn.addEventListener("click", (e) => {
  isActive = !isActive;
  isActive
    ? (sidebar.style.display = "block")
    : (sidebar.style.display = "none");
});
