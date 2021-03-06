'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var setupSimilar = userDialog.querySelector('.setup-similar');
  var userNameInput = userDialog.querySelector('.setup-user-name');
  var form = userDialog.querySelector('.setup-wizard-form');
  var wizardCoat = userDialog.querySelector('.wizard-coat');
  var wizardEyes = userDialog.querySelector('.wizard-eyes');
  var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup, userNameInput);
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    setupSimilar.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    userDialog.style.top = 80 + 'px';
    userDialog.style.left = 840 + 'px';
    document.removeEventListener('keydown', onPopupEscPress);
    resetWizard();
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    }, window.errorHandler);
    evt.preventDefault();
    resetWizard();
  });

  var resetWizard = function () {
    userNameInput.value = 'Синий Пендальф';
    wizardEyes.style.fill = 'black';
    wizardCoat.style.fill = 'rgb(101, 137, 164)';
    wizardFireball.style.background = '#ee4830';
  };

  window.openClosePopup = {
    openPopup: openPopup,
    closePopup: closePopup
  };
})();
