'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var wizardCoat = userDialog.querySelector('.wizard-coat');
  var wizardEyes = userDialog.querySelector('.wizard-eyes');
  var wizardFireballColor = userDialog.querySelector('.setup-fireball-wrap');
  var inputCoatColor = userDialog.querySelector('input[name="coat-color"]');
  var inputEyesColor = userDialog.querySelector('input[name="eyes-color"]');
  var inputFireballColor = userDialog.querySelector('input[name="fireball-color"]');
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var seputWizardCoat = function () {
    var colorWizardCoatNew = window.random.getRandomValue(coatColors);
    wizardCoat.style.fill = colorWizardCoatNew;
    inputCoatColor.value = colorWizardCoatNew;
  };

  var setupWizardEyes = function () {
    var colorWizardEyesNew = window.random.getRandomValue(eyesColors);
    wizardEyes.style.fill = colorWizardEyesNew;
    inputEyesColor.value = colorWizardEyesNew;
  };

  var setupWizardFireballColor = function () {
    var fireballColorNew = window.random.getRandomValue(fireballColors);
    wizardFireballColor.style.background = fireballColorNew;
    inputFireballColor.value = fireballColorNew;
  };

  wizardCoat.addEventListener('click', function () {
    seputWizardCoat();
  });

  wizardEyes.addEventListener('click', function () {
    setupWizardEyes();
  });

  wizardFireballColor.addEventListener('click', function () {
    setupWizardFireballColor();
  });

})();
