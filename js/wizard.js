'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupForm = document.querySelector('.setup-wizard-form')
  var wizardName = userDialog.querySelector('.setup-user-name');
  var wizardCoat = userDialog.querySelector('.wizard-coat');
  var wizardEyes = userDialog.querySelector('.wizard-eyes');
  var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
  var inputCoatColor = userDialog.querySelector('input[name="coat-color"]');
  var inputEyesColor = userDialog.querySelector('input[name="eyes-color"]');
  var inputFireballColor = userDialog.querySelector('input[name="fireball-color"]');
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var Wizard = function () {
  };

  Wizard.prototype = {
    setName: function (name) {
      if (!name) {
        throw new Error('Имя не задано');
      }
      if (name.length > 30) {
        throw new Error('Недопустимое значение имени мага: ' + name);
      }
      this.name = wizardName.value;
      this.onChange(this);
      return name;
    },
    changeCoatColor: function () {
      var newColor = window.random.getRandomValue(coatColors);
      this.coatColor = newColor;
      return newColor;
    },
    changeEyesColor: function () {
      var newColor = window.random.getRandomValue(eyesColors);
      this.eyesColor = newColor;
      return newColor;
    },
    changeFireballColor: function () {
      var newColor = window.random.getRandomValue(fireballColors);
      this.fireballColor = newColor;
      return newColor;
    },
  };

  window.myWizard = new Wizard();

  wizardCoat.addEventListener('click', function () {
    var coatColorNew = window.myWizard.changeCoatColor();
    wizardCoat.style.fill = coatColorNew;
    inputCoatColor.value = coatColorNew;
    window.wizard.coatChangeHandler(coatColorNew);
  });

  wizardEyes.addEventListener('click', function () {
    var eyesColorNew = window.myWizard.changeEyesColor();
    wizardEyes.style.fill = eyesColorNew;
    inputEyesColor.value = eyesColorNew;
    window.wizard.eyesChangeHandler(eyesColorNew);
  });

  wizardFireball.addEventListener('click', function () {
    var fireballColorNew = window.myWizard.changeFireballColor();
    wizardFireball.style.background = fireballColorNew;
    inputFireballColor.value = fireballColorNew;
  });

  setupForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var wizardCopy = document.querySelector('svg').cloneNode(true);
    wizardCopy.querySelector('#wizard-coat').style.fill = wizardCoat.style.fill;
    wizardCopy.querySelector('#wizard-eyes').style.fill = wizardEyes.style.fill;
    var wizardBase64Right = window.svg2base64(wizardCopy);
    wizardCopy.querySelector('#wizard').setAttribute('transform', 'translate(62, 0) scale(-1, 1)');
    var wizardBase64Left = window.svg2base64(wizardCopy);
    window.restartGame(wizardBase64Right, wizardBase64Left);
  });

})();
