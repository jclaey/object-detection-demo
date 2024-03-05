const images = document.querySelectorAll('.image')
const imgDisplayArea = document.querySelector('#img-display-area')
const predictionsArea = document.querySelector('#predictions')

images.forEach(image => {
    image.addEventListener('click', e => {
        predictionsArea.textContent = 'Predictions: '
        cocoSsd.load().then(model => {
            model.detect(e.target).then(predictions => {
                predictions.forEach(prediction => {
                    predictionsArea.textContent += prediction.class + `, score: ${prediction.score} `
                })
            })
        })
    })
})