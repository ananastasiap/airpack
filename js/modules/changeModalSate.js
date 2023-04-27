export const changeModalState = (state) => {
  const typesOfToads = document.querySelectorAll('.radio');
  const activityTypes = document.querySelectorAll('#activity_type');
  const levelsOfLicenses = document.querySelectorAll('#license');

  const bindActionToElems = (event, elements, property) => {
    elements.forEach((element) => {
      element.addEventListener(event, () => {
        switch(element.nodeName) {
          case 'INPUT' :
            if (element.getAttribute('type') === 'radio' || element.getAttribute('type') === 'number') {
              state[property] = element.value;
            }
            break;
          case 'SELECT' :
            state[property] = element.value;
            break;
        }
      });
    });
  };

  bindActionToElems('input', levelsOfLicenses, 'license-level');
  bindActionToElems('change', activityTypes, 'activity-type');
  bindActionToElems('change', typesOfToads, 'toad-type');
};