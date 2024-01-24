// 数据
let result = ''

document.addEventListener('DOMContentLoaded',function(){
    const stars = document.querySelectorAll('.star');
    const selectedRating = document.getElementById('selectedRating')
    const displayRating = document.getElementById('displayRating');



stars.forEach(star => {
    star.addEventListener('click',function(){
        const ratingValue = this.dataset.rating;
        result = ratingValue;
        displayRating.textContent = result;
        selectedRating.style.display = 'block';
    });
    star.addEventListener('mouseover',function(){
        resetStars();
        const ratingValue = this.dataset.rating;

        highlightStars(ratingValue)
    })
    star.addEventListener('mouseout',function(){
        resetStars();
        const ratingValue = displayRating.textContent;
        highlightStars(ratingValue);
    })
});


function resetStars(){
    stars.forEach(star =>{
        star.classList.remove('active')
    });
}
function highlightStars(rating){
    stars.forEach(star => {
        if(star.dataset.rating <= rating){
            star.classList.add('active')
        }
    });
}
})