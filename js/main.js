import { tabs, timer, modals, forms, changeModalState, images, soundEffect } from './modules/index.js';

window.addEventListener('DOMContentLoaded', () => {
  const deadline = '2023-05-30';
  let modalState = {};

  tabs({
    headerSelector: '.slider',
    tabSelector: '.item__content',
    contentSelector: '.slider__content',
    activeClass: 'active',
  });
  timer('.timer', deadline);
  modals();
  images();
  soundEffect();
  forms(modalState);
  changeModalState(modalState);
});