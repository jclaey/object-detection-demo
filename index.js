const images = document.querySelectorAll('.image')
const imgDisplayArea = document.querySelector('#img-display-area')

images.forEach(image => {
    image.addEventListener('click', e => {
        console.log(e.target)
        // imgDisplayArea.innerHTML += `
        //     <img src="${}" />
        // `
    })
})