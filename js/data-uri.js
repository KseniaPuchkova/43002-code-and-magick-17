'use strict';

(function () {
  var DATA_URI_PREFIX = 'data:image/svg+xml;charset=utf-8;base64,';

  window.svg2base64 = function (svgElement) {
    // превратить элемент в текст
    var xml = new XMLSerializer().serializeToString(svgElement);

    // закодировать текст в base64 форму
    var svg64 = window.btoa(xml);

    // добавить заголовок
    return DATA_URI_PREFIX + svg64;
  };
})();
