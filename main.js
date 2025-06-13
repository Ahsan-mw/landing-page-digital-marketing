console.log("hi");
console.log(window.location.href);
console.log(window.location.href);
const menu = document.getElementsByClassName("hamburger");
console.log(menu);
menu[0].addEventListener("click", () => {
  console.log("click");
  document.querySelector(".nav").classList.toggle("open");
});

const cross = document.getElementsByClassName("cross-btn");
console.log(menu);
cross[0].addEventListener("click", () => {
  console.log("click");
  document.querySelector(".nav").classList.toggle("open");
});
