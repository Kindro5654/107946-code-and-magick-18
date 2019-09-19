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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH,CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, players, time, color) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0,0,0,0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 125,40);
  ctx.fillText('Список результатов:', 125,60);

  ctx.fillStyle = 'black';

  var playerIndex = 0;
  var playerName = 'Вы';

  ctx.fillText(playerName, GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST) * playerIndex, 255);
  ctx.fillRect(GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST) * playerIndex, 83, COLUMN_WIDTH, COLUMN_HEIGHT);

  var playerIndex = 1;
  var playerName = 'Кекс';

  ctx.fillText(playerName, GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST) * playerIndex, 255);
  ctx.fillRect(GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST) * playerIndex, 83, COLUMN_WIDTH, 100);

  var playerIndex = 2;
  var playerName = 'Катя';

  ctx.fillText(playerName, GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST)* playerIndex, 255);
  ctx.fillRect(GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST) * playerIndex, 83, COLUMN_WIDTH, 80);

  var playerIndex = 3;
  var playerName = 'Игорь';

  ctx.fillText(playerName, GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST) * playerIndex, 255);
  ctx.fillRect(GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST) * playerIndex, 83, COLUMN_WIDTH, COLUMN_HEIGHT);





}
