'use strict';

(function () {
  var colorWizardCoat;
  var colorWizardEyes;
  window.wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === colorWizardCoat) {
      rank += 2;
    }
    if (wizard.colorEyes === colorWizardEyes) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    window.render(window.wizards.slice().
        sort(function (a, b) {
          var rankDiff = getRank(b) - getRank(a);
          if (rankDiff === 0) {
            rankDiff = window.wizards.indexOf(a) - window.wizards.indexOf(b);
          }

          return rankDiff;
        }));
  };

  window.wizard.eyesChangeHandler = function (color) {
    colorWizardEyes = color;
    window.debounce(updateWizards);
  };

  window.wizard.coatChangeHandler = function (color) {
    colorWizardCoat = color;
    window.debounce(updateWizards);
  };
})();
