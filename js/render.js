'use strict';

(function () {
  var SHOW_WIZARDS_NUMBER = 4;
  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template');

  var renderWizard = function (wizard) {
    var element = wizardTemplate.content.cloneNode(true);
    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    element.querySelector('.setup-similar-label').innerText = wizard.name;

    return element;
  };

  window.render = function (data) {
    similarList.innerHTML = '';
    data.slice(0, SHOW_WIZARDS_NUMBER).forEach(function (wizard) {
      similarList.appendChild(renderWizard(wizard));
    });
    similar.classList.remove('hidden');
  };

  window.successHandler = function (data) {
    window.wizards = data;
    window.render(window.wizards);
    window.openClosePopup.closePopup();
  };

  window.errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(window.successHandler, window.errorHandler);
})();
