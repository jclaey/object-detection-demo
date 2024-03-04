const images = document.querySelectorAll('.image')
const imgDisplayArea = document.querySelector('#img-display-area')

images.forEach(image => {
    image.addEventListener('click', e => {
        cocoSsd.load().then(model => {
            model.detect(e.target).then(predictions => {
                console.log('Predictions: ', predictions)
            })
        })
    })
})