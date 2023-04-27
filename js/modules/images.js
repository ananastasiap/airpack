export const images = () => {
  const rootElement = document.documentElement;
  const imgPopup = document.createElement('div');
  const bigImage = document.createElement('img');
  const sliderSpace = document.querySelector('.slider');
  const imagesSlider = document.querySelectorAll('.slider__content-img');

  imgPopup.classList.add('popup-images');
  sliderSpace.append(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  bigImage.style.width = '65vh';
  bigImage.style.height = 'auto';

  imgPopup.append(bigImage);

  const closeBigImg = () => {
    imgPopup.style.display = 'none';
    rootElement.classList.remove('hide-scroll');
  };

  const openBigImg = (imageSlider) => {
    imgPopup.style.display = 'flex';
    bigImage.src = imageSlider.src;
    rootElement.classList.add('hide-scroll');
  };

  imagesSlider.forEach(imageSlider => {
    imageSlider.addEventListener('click', (event) => {
      event.preventDefault();
      openBigImg(imageSlider);
    });
  });

  imgPopup.addEventListener('click', (event) => {
    if (event.target === imgPopup) {
      closeBigImg();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeBigImg();
    }
  });
};