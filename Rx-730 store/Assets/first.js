const navBtn = document.querySelector("._contofvh");
const navLink = document.querySelector(".nav-right");
let toggle = 0;

navBtn.addEventListener("click", () => {
  if (toggle === 0) {
    navLink.style.display = "block";
    toggle = 1;
  } else {
    navLink.style.display = "none";
    toggle = 0;
  }
});
