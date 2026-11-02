const topBtn = document.getElementById("topBtn")
const myMenu = document.getElementById("myMenu");
const menuBackdrop = document.getElementById("menuBackdrop");

function toggleHam() {
  myMenu.classList.toggle("menu-active")
}

function closeMenu() {
  myMenu.classList.remove("menu-active");
  menuBackdrop.classList.remove("is-active");
}

function toggleHam() {
  const isOpen = myMenu.classList.toggle("menu-active");
  menuBackdrop.classList.toggle("is-active", isOpen);
}

window.addEventListener("scroll", () =>{
    topBtn.classList.toggle("show", window.scrollY > 300)
})

topBtn.addEventListener("click", () => {
    window.scrollTo({top:0, behavior: "smooth"})
})

window.addEventListener("load", () => {
  document.querySelector("#about").scrollIntoView({behavior: "smooth"})
})

myMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener("click", () => {
    myMenu.classList.remove("menu-active");
  });
});

menuBackdrop.addEventListener("click", closeMenu);