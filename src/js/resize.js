const productSelection = document.querySelector('.product-selection');
const productCard = document.querySelector('.product-card');
const main = document.querySelector('.main');
const introText = document.querySelector('.intro-text');
const roomDemo = document.querySelector('.room-demo');
const productSelectionModes = document.querySelector('.product-selection__modes');
const productSelectionModeDay = document.querySelector('.product-selection__mode_day');
const productSelectionModeNight = document.querySelector('.product-selection__mode_night');
const productSelectionProducts = document.querySelector('.product-selection__products');
const roomDemoPic = document.querySelector('.room-demo__pic');
const roomDemoLamp = document.querySelector('.room-demo__lamp');
const k = 1.3;


function resizeProductSelection () {
    if ((document.body.clientWidth / document.body.clientHeight <= k)) {
        productSelection.classList.add('product-selection__horizontal');
        main.append(productSelection);
        productSelectionModes.classList.add('product-selection__modes_vertical');
        productSelectionModeDay.classList.add('product-selection__mode_vertical');
        productSelectionModeNight.classList.add('product-selection__mode_vertical');
        productSelectionProducts.classList.add('product-selection__products_horizontal');
    }
}
window.addEventListener('DOMContentLoaded', () => {
    resizeRoomDemoLamp();
    resizeProductSelection();
});
window.addEventListener('load', () => {
    resizeRoomDemoLamp();
    resizeProductSelection();
});
window.addEventListener('resize', () => {
    resizeRoomDemoLamp();
    if (document.body.clientWidth / document.body.clientHeight <= k) {
        resizeProductSelection();
    }
    else if (document.body.clientWidth / document.body.clientHeight >= k)  {
        productSelection.classList.remove('product-selection__horizontal');
        productCard.append(productSelection);
        productSelectionModes.classList.remove('product-selection__modes_vertical');
        productSelectionModeDay.classList.remove('product-selection__mode_vertical');
        productSelectionModeNight.classList.remove('product-selection__mode_vertical');
        productSelectionProducts.classList.remove('product-selection__products_horizontal');
    }
})
function resizeRoomDemoLamp() {
    roomDemoLamp.style.left = roomDemoPic.clientWidth * 0.23 + 'px';
}
