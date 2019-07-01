'use strict';

(function () {
  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template');

  /* var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    wizards[i] = {
      name: window.random.getRandomValue(names),
      surname: window.random.getRandomValue(surnames),
      coatColor: window.random.getRandomValue(coatColors),
      eyesColor: window.random.getRandomValue(eyesColors)
    };
  }
*/

  var renderWizard = function (wizard) {
    var element = wizardTemplate.content.cloneNode(true);
    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    element.querySelector('.setup-similar-label').innerText = wizard.name;

    return element;
  };

  window.render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }
    similar.classList.remove('hidden');
  };

  window.successHandler = function (data) {
    window.wizards = data;
    window.render(window.wizards);
    window.openClosePopup.closePopup();
  };

  /*  window.successHandler = function (arr) {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < WIZARDS_NUMBER; j++) {
      fragment.appendChild(renderWizard(arr[j]));
    }
    similarList.appendChild(fragment);
    window.openClosePopup.closePopup();
  };
*/
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
