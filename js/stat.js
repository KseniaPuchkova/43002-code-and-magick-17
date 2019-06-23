'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 140;
  var CLOUD_Y = 20;
  var CLOUD_GAP = 10;
  var FONT_GAP_TOP = 10;
  var FONT_GAP_BOTTOM = 20;
  var BAR_X = 210;
  var BAR_Y = 250;
  var BAR_WIDGTH = 40;
  var BAR_MAX_HEIGHT = 150;
  var BAR_GAP = 80;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.5)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = '#00' + window.random.getRandomNumber(10, 49) + window.random.getRandomNumber(50, 99);
      }
      ctx.fillRect(BAR_X + BAR_GAP * i, BAR_Y, BAR_WIDGTH, -(BAR_MAX_HEIGHT * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], BAR_X + BAR_GAP * i, BAR_Y + FONT_GAP_BOTTOM);
      ctx.fillText(Math.round(times[i]), BAR_X + BAR_GAP * i, BAR_Y - ((BAR_MAX_HEIGHT * times[i]) / maxTime) - FONT_GAP_TOP);
      ctx.fillText('Ура, вы победили!', CLOUD_X + FONT_GAP_BOTTOM, CLOUD_Y + FONT_GAP_BOTTOM);
      ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP_BOTTOM, CLOUD_Y + (FONT_GAP_BOTTOM * 2));
    }
  };
})();
