export const soundEffect = () => {
  const buttonsSubmit = document.querySelectorAll('.form__button');
  const buttonsClose = document.querySelectorAll('.close');
  const soundsEffect = new Audio();

  const addSound = (src) => {
    soundsEffect.src = src;
    soundsEffect.currentTime = 0;
    soundsEffect.play();
  };

  buttonsSubmit.forEach(buttonSubmit => {
    buttonSubmit.addEventListener('click', () => {
      addSound('../../sounds/croaking_send.mp3');
    });
  });

  buttonsClose.forEach(buttonClose => {
    buttonClose.addEventListener('click', () => {
      addSound('../../sounds/croaking.mp3');
    });
  });
};