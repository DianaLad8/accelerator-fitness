const buttonSelectToogleAll = document.querySelectorAll('.form__select-toggle');

const onButtonSelectToggleClick = (e) => {
  const button = e.target;
  const formControlCurrent = button.closest('.form__control');
  const listOptions = formControlCurrent.querySelector('.form__options');
  const itemOptionAll = listOptions.querySelectorAll('.form__option');
  const dataTownCurrent = formControlCurrent.querySelector('[data-input="town"]');

  listOptions.classList.toggle('form__options--open');
  const listOpen = listOptions.classList.contains('form__options--open');
  if (listOpen) {
    formControlCurrent.classList.add('form__control--select-open');
    formControlCurrent.classList.remove('form__control--select');
  } else {
    formControlCurrent.classList.remove('form__control--select-open');
    formControlCurrent.classList.add('form__control--select');
  }

  const listOptionsRemove = () => {
    listOptions.classList.remove('form__options--open');
    formControlCurrent.classList.remove('form__control--select-open');
    formControlCurrent.classList.add('form__control--select');
  };

  const onOptionClick = (evt) => {
    const item = evt.target;
    const value = item.textContent;
    button.value = value;
    dataTownCurrent.value = value;
    listOptionsRemove();
  };

  const onOptionMouseover = (el) => {
    const option = el.target;
    const value = option.textContent;
    button.value = value;
  };

  const onOptionKeyUp = (event) => {
    const option = event.target;
    const value = option.textContent;
    button.value = value;

    if (listOpen && event.keyCode === 13) {
      dataTownCurrent.value = value;
      listOptionsRemove();
    }
  };

  itemOptionAll.forEach((item) => {
    item.addEventListener('click', (onOptionClick));
    item.addEventListener('mouseover', onOptionMouseover);
    item.addEventListener('keyup', onOptionKeyUp);
  });

};

buttonSelectToogleAll.forEach((button) => {
  button.addEventListener('click', onButtonSelectToggleClick);
});