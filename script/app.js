const topBtn = document.getElementById("topBtn")
const myMenu = document.getElementById("myMenu");
const menuBackdrop = document.getElementById("menuBackdrop");
const hamBtn = document.getElementById('ham-btn')


// Event click Hamburger bar -> show dropdown & bg blur
const openMenu = () => {
  myMenu.classList.toggle('active')
  menuBackdrop.classList.toggle('backdrop-open')
}
hamBtn.addEventListener('click', openMenu)

// click menu dropdown
const closeMenu = () => {
  myMenu.classList.remove('active')
  menuBackdrop.classList.remove('backdrop-open')
}
for (const list of myMenu.querySelectorAll('a')) {
  list.addEventListener('click', closeMenu)
}
menuBackdrop.addEventListener('click', closeMenu)

// Event click to Top
window.addEventListener("scroll", () =>{
    topBtn.classList.toggle("show", window.scrollY > 300)
})
topBtn.addEventListener("click", () => {
    window.scrollTo({top:0, behavior: "smooth"})
})

// Event load page 
window.addEventListener("load", () => {
  document.querySelector("#about").scrollIntoView({behavior: "smooth"})
})
