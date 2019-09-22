var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var COLUMN_DIST = 50;
var GIST_START_X = 145;
var GIST_START_Y = 83;
var START_TEXT_Y = GIST_START_Y + 172;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH,CLOUD_HEIGHT);
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.lenght; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0,0,0,0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 125,40);
  ctx.fillText('Список результатов:', 125,60);

  ctx.fillStyle = 'black';

  var maxTime = getMaxElement(times);


  for (i = 0; i < names.length; i++) {
    ctx.fillText(names[i], GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST) * i, START_TEXT_Y);
    //ctx.fillText(times[i], GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST), (COLUMN_HEIGHT + 10));
    ctx.fillRect(GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST) * i, GIST_START_Y, COLUMN_WIDTH, (COLUMN_HEIGHT * times[i]) / maxTime);
    /**
     * if (names = 'Вы') {
     * ctx.fillStyle =  'rgba(255, 0, 0, 1)';
     * } else {
     * ctx.fillStyle = 'hsl(240, 10%, 100%)';
     * }
     */
  }
}

