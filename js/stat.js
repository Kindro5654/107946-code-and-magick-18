var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 50;
var COLUMN_DIST = 50;
var COLUMN_POSITION_X = CLOUD_X + COLUMN_WIDTH;

// Функция параметров Белого облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Нахождение маскимального значения times
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0,0,0,0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 125, 40);
  ctx.fillText('Список результатов:', 125, 60);

  var maxTime = getMaxElement(times);

  // Цикл построения гистограммы

  for (var i = 0; i < names.length; i++) {
    var playerName = names[i];
    var positionX = COLUMN_POSITION_X + ((COLUMN_WIDTH + COLUMN_DIST) * i);
    var namePositionY = CLOUD_HEIGHT - GAP;
    ctx.fillStyle = 'black';

    ctx.fillText(playerName, positionX, namePositionY);

    var playerTime = Math.floor(times[i]);
    var scorePositionY = CLOUD_HEIGHT - ((COLUMN_HEIGHT * times[i]) / maxTime);

    ctx.fillText(playerTime, positionX, scorePositionY - 112);

    // Функция выбора цвета
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomNumber = Math.floor(Math.random() * 100);

      ctx.fillStyle = 'hsl(240,' + randomNumber + '%, 50%)';
    }

    var columnPositionY = (CLOUD_X + GAP * 2) * 2;
    var calculatedColumnHeight = -((COLUMN_HEIGHT * times[i]) / maxTime);

    ctx.fillRect(positionX, columnPositionY, COLUMN_WIDTH, calculatedColumnHeight - 80);

  }
};


