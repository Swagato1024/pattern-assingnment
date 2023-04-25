const stars = function(width) {
  return "*".repeat(width);
}

const spaces = function(width) {
  return " ".repeat(width);
}

const hollowLine = function(width) {
  return stars(1) + spaces(width - 2) + stars(1);
}

const applyStyle = function(style, widths) {
  return widths.map(style);
}

const filled = function() {
  return [stars];
}

const hollow = function(list) {
  const group = [];
  group.push([list[0]]);
  group.push(list.slice(1, -1));
  group.push(list.slice(-1));

  return group;
}

const rectangle = function(row, col) {
  const widths = [];

  for(let index = 0; index < row; index++) {
    widths.push(col);
  }

  return widths;
}

const monolith = function(lineWidths) {
  return [lineWidths];
}

const getShapeData = function(shape, width, breadth) {
  const shapes = {
    hollowRectangle: {
      styles: [stars, hollowLine, stars],
      lineWidthGroups: hollow(rectangle(width, breadth))
    },
    rectangle: {
      styles: [stars],
      lineWidthGroups: monolith(rectangle(width, breadth))
    }
  }

  return shapes[shape];
}

const generatePattern = function(pattern, width, breadth) {
  const shape = getShapeData(pattern, width, breadth);
  const styles = shape.styles;
  const lineWidthGroups = shape.lineWidthGroups;

  return styles.flatMap(function(style, index) {
    return applyStyle(style, lineWidthGroups[index]);
  });
}

let shape = generatePattern('hollowRectangle', 5, 4);
console.log(shape.join('\n'));

shape = generatePattern('rectangle', 5, 4);
console.log(shape.join('\n'));
