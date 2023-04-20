import { tabs } from './modules';

window.addEventListener('DOMContentLoaded', () => {
  tabs({
    headerSelector: '.slider',
    tabSelector: '.item__content',
    contentSelector: '.slider__content',
    activeClass: 'active'});
});