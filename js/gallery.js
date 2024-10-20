const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-image")

const images = document.querySelectorAll('img.imgReal')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        lightboxImg.src = image.src
    })
})

lightbox.addEventListener('click', e => {
    
    lightbox.classList.remove('active')
})