const popupWeb = document.getElementById('popupWeb');
const buttonWeb = document.getElementById('buttonWeb');
const closeButtonWeb = popupWeb.querySelector('.closeButton');

buttonWeb.addEventListener('click', () => {
    popupWeb.style.display = 'flex';
});

closeButtonWeb.addEventListener('click', () => {
    popupWeb.style.display = 'none';
});

const popupFig = document.getElementById('popupFig');
const buttonFig = document.getElementById('buttonFig');
const closeButtonFig = popupFig.querySelector('.closeButton');

buttonFig.addEventListener('click', () => {
    popupFig.style.display = 'flex';
});

closeButtonFig.addEventListener('click', () => {
    popupFig.style.display = 'none';
});
