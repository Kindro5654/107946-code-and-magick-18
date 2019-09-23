var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 50;
var COLUMN_DIST = 50;
var GIST_START_X = 145;
var GIST_START_Y = 83;
var START_TEXT_Y = GIST_START_Y + 172; // 172 из за того что не могу нормально построить гистограммы, рисует сверху вниз, и координата плавает.

// Функция параметров Белого облака
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH,CLOUD_HEIGHT);
}

// Нахождение маскимального значения times
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.lenght; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0,0,0,0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 125, 40);
  ctx.fillText('Список результатов:', 125, 60);

  var maxTime = getMaxElement(times);

  //Цикл построения гистограммы
  // Вопрос с гистограммой, чтобы она рисовалась снизу вверх, добавлял минус, но это ее как то уменьшало,
  // как будто переносилось анчало координат.
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST) * i, START_TEXT_Y);
    ctx.fillText(Math.floor(times[i]), GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST) * i, (COLUMN_HEIGHT + GAP));
    ctx.fillRect(GIST_START_X + (COLUMN_WIDTH + COLUMN_DIST) * i, GIST_START_Y, COLUMN_WIDTH, (COLUMN_HEIGHT * times[i]) / maxTime);

    //Функция определения цвета
    // А цвет почему то все равно не работает и как сделать, чтобы он цветом выделял именно гистограмму, а не текст?
    if (names[i] === 'Вы') {
      ctx.fillStyle =  'rgba(255, 0, 0, 1)';
      } else {
      ctx.fillStyle = 'hsl(240, Math.floor(Math.random() * 100), 50%)'; // 50% не трогал, так как в задании было прописано изменять насыщенность
      };
  }
}

