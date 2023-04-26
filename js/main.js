import { tabs, timer, modals, forms } from './modules/index.js';

window.addEventListener('DOMContentLoaded', () => {
  const deadline = '2023-05-30';

  tabs({
    headerSelector: '.slider',
    tabSelector: '.item__content',
    contentSelector: '.slider__content',
    activeClass: 'active'});
  timer('.timer', deadline);
  modals();
  forms();
});