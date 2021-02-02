let position = 0;
const slidesToShow = 2;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.product-img')
const itemsCount = items.length;
var itemWidth = container.clientWidth / slidesToShow
if (container.clientWidth == 375) {
    itemWidth = itemWidth - 3;
} else {
    itemWidth = itemWidth + 10;
}
const movePosition = slidesToScroll * itemWidth;


btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition()
    checkBtns()
})

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition()
    checkBtns()
});
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
}
const checkBtns = () => {
    btnPrev.disabled = position === 0
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
}
checkBtns()