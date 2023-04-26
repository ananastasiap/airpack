import { tabs, timer, modals, forms, changeModalState } from './modules/index.js';

window.addEventListener('DOMContentLoaded', () => {
  const deadline = '2023-05-30';
  let modalState = {};

  tabs({
    headerSelector: '.slider',
    tabSelector: '.item__content',
    contentSelector: '.slider__content',
    activeClass: 'active'});
  timer('.timer', deadline);
  modals();
  forms(modalState);
  changeModalState(modalState);
});