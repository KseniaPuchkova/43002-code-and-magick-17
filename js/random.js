'use strict';

(function () {
  window.random = {
    getRandomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getRandomValue: function (arr) {
      var randomValue = Math.floor(Math.random() * arr.length);
      return arr[randomValue];
    }
  };
})();
