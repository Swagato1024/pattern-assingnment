const style = function(symbol, times) {
  return symbol.repeat(times);
}

const spaces = function(times) {
  return style(' ', times);
}

const stars = function(times) {
  return style('*', times);
}

const hollowLines = function(width) {
  return stars(1) + spaces(width - 2) + stars(1);
}

const applyStyle = function(style, lineWidths) {
  return lineWidths.map(style);
}

const leftPad = function(maxWidth, lineWidth) {
}

const hollow = function() {
  return [stars, hollowLines, stars];
}

const renderStyleGroup = function(styles, lineWidthGroups) {
  return styles.flatMap(function(style, index) {
    return applyStyle(style, lineWidthGroups[index]);
  });
}

console.log(renderStyleGroup([stars, spaces, stars], [[1],  [2, 3, 4, 5], [6]]));

