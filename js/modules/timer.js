export const timer = (id, deadline) => {
  const getTimeRemaining = (deadline) => {
    const remainingTime = new Date(deadline - new Date());
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const [hours, minutes, seconds] = remainingTime.toLocaleTimeString('ru-RU', { timeStyle: 'medium' }).split(':');

    return { remainingTime, days, hours, minutes, seconds };
  };

  const setClock = (selector, deadline) => {
    const timer = document.querySelector(selector);

    const updateClock = () => {
      const remainingTime = getTimeRemaining(deadline);

      for (const itemOfRemaingTime of Object.keys(remainingTime)) {
        const partOfTimer = timer.querySelector(`#${itemOfRemaingTime}`);
        if (partOfTimer) {
          partOfTimer.textContent = remainingTime[itemOfRemaingTime];
        }
      }

      if (remainingTime < 0) {
        clearInterval(timeInterval);
      }
    };

    const timeInterval = setInterval(updateClock, 1000);
    updateClock();
  };

  setClock(id, new Date(deadline));
};