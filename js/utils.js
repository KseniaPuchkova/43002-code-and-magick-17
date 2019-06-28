'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (evt, callback, input) {
      if (evt.target !== input && evt.keyCode === ESC_KEYCODE) {
        callback();
      }
    },
    isEnterEvent: function (evt, callback) {
      if (evt.keyCode === ENTER_KEYCODE) {
        callback();
      }
    }
  };
})();
