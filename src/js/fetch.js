const APIurl = "https://private-anon-c67320a3c6-lampshop.apiary-mock.com/lamps";

const productCardPic = document.querySelector('.product-card__pic');
const productSelectionPicsNodelist = document.querySelectorAll('.product-selection__product-pic');
const productSelectionProductsNodelist = document.querySelectorAll('.product-selection__product');
const productSelectionProducts = document.querySelector('.product-selection__products');
const roomDemoLamp = document.querySelector('.room-demo__lamp');
const roomDemoPic = document.querySelector('.room-demo__pic');
const featuresMaterial = document.querySelector('#material');
const featuresDimensions = document.querySelector('#dimensions');
const featuresWeight = document.querySelector('#weight');
const featuresElectrification = document.querySelector('#electrification');
const loaderNodeList = document.querySelectorAll('.loader');
const productSelectionModes = document.querySelector('.product-selection__modes');

window.addEventListener('DOMContentLoaded', fetchHandler());

function fetchHandler() {
    try {
        const response = fetch(APIurl);
        response.
            then(res => res.json()).
                then(data => {
                    hideLoader();
                    setProductSelectionPics(data);
                    setProductCardPic(data);   
                    togglePicMode(data);         
                });            
        }
    catch(error) {
        console.log(error)
    }
}

function setProductSelectionPics(data) {
    productSelectionPicsNodelist.forEach((el, i) => {
        el.src = data[i].image;
        el.id = data[i].id;
        el.alt = data[i].name;
    });
}

function setProductCardPic(data) {
    productSelectionProducts.addEventListener('click', (e) => {
        productSelectionPicsNodelist.forEach((el) => {
            el.classList.remove('product-selection__product-pic_active');
        });
        e.target.classList.add('product-selection__product-pic_active');
        const el = data[e.target.id-1];
        roomDemoPic.src = "img/room-photo.png";
        if (e.target.id != "2") {
            roomDemoLamp.style.top ="-2%";
        }
        else  {
            roomDemoLamp.style.top ="-16%";
        }
        productCardPic.src = el.image;
        productCardPic.alt = el.name;
        roomDemoLamp.src = el.image;
        roomDemoLamp.alt = el.name;
        roomDemoLamp.id = el.id;
        setFeaturesTextContent(el);
    });
}

function togglePicMode(data) {
    productSelectionModes.addEventListener('click', (e) => {
        let activeLampId = roomDemoLamp.id;
        if(e.target.classList.contains('product-selection__mode_night')) {
            if(data[activeLampId-1].isDarkMode) {
                roomDemoPic.src = "img/room-demo__night.png";
            }
        }
        else if(e.target.classList.contains('product-selection__mode_day')) {
            roomDemoPic.src = "img/room-photo.png";
        }
    });
}

function setFeaturesTextContent(el) {
    featuresMaterial.textContent = el.material;
    featuresDimensions.textContent = `H ${el.height} X W ${el.width} X D 12`
    featuresWeight.textContent = `${el.weight} kg`;
    featuresElectrification.textContent = el.electrification.replaceAll(',', ' |');
}
function hideLoader() {
    productSelectionPicsNodelist.forEach((el) => {
        el.style.display = "block";
    });
    loaderNodeList.forEach((el) => {
        el.style.display = "none";
    });
}

