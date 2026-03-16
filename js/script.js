const photos = document.querySelectorAll(".photo")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")
const close = document.getElementById("close")

photos.forEach(photo => {

photo.addEventListener("click", ()=>{

lightbox.style.display="flex"
lightboxImg.src = photo.src

})

})

close.addEventListener("click", ()=>{
lightbox.style.display="none"
})

lightbox.addEventListener("click",(e)=>{

if(e.target !== lightboxImg){
lightbox.style.display="none"
}

})

/* MENU MOBILE */

const menuToggle = document.getElementById("menu-toggle")
const nav = document.getElementById("nav")

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("active")

})