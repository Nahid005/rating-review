const emojiEl = document.querySelectorAll(".fa-regular")
const starEl = document.querySelectorAll(".fa-solid")
const colorArray = ['IndianRed', 'MediumPurple', 'DarkKhaki', 'LimeGreen', 'green']

updateRating(0)

starEl.forEach((singleStar, index) => {
    singleStar.addEventListener('click', () => {
        updateRating(index)
    })
})

function updateRating (index) {
    starEl.forEach((singleStar, idex) => {
        if(idex < index +1){
            singleStar.classList.add('active')
        }else{
            singleStar.classList.remove('active')
        }
    })

    emojiEl.forEach((singleEmoji) => {
        singleEmoji.style.transform = `translate(-${index * 50}px)`
        singleEmoji.style.color = colorArray[index]
    })
}