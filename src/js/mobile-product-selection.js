const roomDemoArrow = document.querySelector('.room-demo__mobile-arrow');
const productSelection = document.querySelector('.product-selection');
const roomDemo = document.querySelector('.room-demo');
const header = document.querySelector('.header');
const main = document.querySelector('.main');


roomDemoArrow.addEventListener('click', () => {
    productSelection.classList.toggle('product-selection_active');
    roomDemoArrow.classList.toggle('room-demo__mobile-arrow_active');
    setPosition();
    window.addEventListener('resize', () => {
        setPosition();
    })
});

function setPosition() {
    productSelection.style.top = `${roomDemo.clientHeight}px`;
    productSelection.style.left = `${main.clientWidth/2 - productSelection.clientWidth/2}px`;
}

