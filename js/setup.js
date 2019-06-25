'use strict';

(function () {
  var WIZARDS_NUMBER = 4;
  var similarList = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template');

  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  var wizards = [];

  var generateWizard = function () {
    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      wizards.push({
        name: window.random.getRandomValue(names),
        surname: window.random.getRandomValue(surnames),
        coatColor: window.random.getRandomValue(coatColors),
        eyesColor: window.random.getRandomValue(eyesColors)
      });
    }
    return wizards;
  };
  generateWizard();

  var renderWizard = function (wizard) {
    var element = wizardTemplate.content.cloneNode(true);
    var wizardElement = element.querySelector('.wizard');
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    element.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;

    return element;
  };

  var appendWizard = function (arr) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      fragment.appendChild(renderWizard(arr[i]));
    }
    similarList.appendChild(fragment);
  };

  appendWizard(wizards);

})();
