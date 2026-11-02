const topBtn = document.getElementById("topBtn")
const myMenu = document.getElementById("myMenu");


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

function toggleHam() {
  myMenu.classList.toggle("menu-active")
}
