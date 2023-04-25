

function style (text, colorCode) {
  return "\033[" + colorCode + "m" + text + "\033[0m";
}

function green(text) {
  return style(text, "32");  
}

function red(text) {
  return style(text, "31"); 
}

function yellow(text) {
  return style(text, "33"); 
}

function underline(text) {
  return  style(text, "4");
}


function print (headline){
  console.log(yellow((underline(headline))));
}




//-------------------------------------------------------------------------------------------------------------------------


const repeatSymbol = function (star, noOfTimes) {
  return star.repeat(noOfTimes);
}

const newline = "\n";
const space = " ";
const star = "*";
const hyphen = "-";

//------------------------------------------------------------------------------------------------------------------------







function areEqual(array1, array2) {
  const length1 = array1.length;
  const length2 = array2.length;

  if (length1 !== length2) {
    return false;
  }

  for(let index = 0 ; index < length1 ; index++) {
    if(array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
}

function assertArraysEqual (programOutput, expectedOutput, testTitle) {
  const newline = "\n";
  const expectedVsActual = newline + " Expected : " + green(expectedOutput) + newline + "  Actual : " + red(programOutput);
  const failedInfo = "❌ " + testTitle + expectedVsActual;  
  const passedInfo = "✅ " + testTitle;

  const result = areEqual(expectedOutput, programOutput) ? passedInfo : failedInfo;
  console.log(result); 
}

function assertEquals (programOutput, expectedOutput, testTitle) {
  const newline = "\n";
  const expectedVsActual = newline + " Expected : \n" + green(expectedOutput) + newline + "  Actual : \n" + red(programOutput);
  const failedInfo = "❌ " + testTitle + expectedVsActual;  
  const passedInfo = "✅ " + testTitle;

  const result = (expectedOutput === programOutput) ? passedInfo : failedInfo;
  console.log(result); 
}











//------------------------------------------------ Rectangle ---------------------------------------------------


const generateRectangle = function (row, col) {
  let rectangle = "";

  for (currentRow = 0 ; currentRow < row ; currentRow++) {
    rectangle += repeatSymbol(star, col);
    rectangle += newline;
  }

  return rectangle;
}

/*
const testGenerateRectangle = function () {
  assertEquals(generateRectangle(0,0), "", "Zero by zero", "generateRectangle()");
  assertEquals(generateRectangle(1,2), "**\n", "Single row", "generateRectangle()");
  assertEquals(generateRectangle(2,3), "***\n***\n", "Multiple rows", "generateRectangle()");
}
 */

patternTests.testGenerateRectangle;


//------------------------------------ Alternate Rectangle --------------------------



const generateAlternatePatterns = function (row , col) {
  let   pattern = "";
  const stars = [star, hyphen];

  for (let currentRow = 0; currentRow < row; currentRow++) {
    let currentSymbol = stars[currentRow % 2];
    pattern += repeatSymbol (currentSymbol, col);
    pattern += newline;
  }

  return pattern;
}

const testGenerateAlternatePatterns = function () {
  assertEquals(generateAlternatePatterns(0,0), "", "Zero by Zero should be empty line", "generateAlternatePatterns()");
  assertEquals(generateAlternatePatterns(1,4), "****\n", "Single row ", "generateAlternatePatterns()");
  assertEquals(generateAlternatePatterns(3,4), "****\n----\n****\n", "Multiple rows", "generateAlternatePatterns()");

}

testGenerateAlternatePatterns();


//------------------------------- Empty Rectangle -----------------------------------

const getHollowLine = function (noOfEmptySpaces) {
  let row = star;
  row += repeatSymbol(space, noOfEmptySpaces);
  row += star;
  row += newline;

  return row;
}

const  generateEmptyRectangle = function (row, col) {
  let rectangle = "";

  let filledRow = repeatSymbol(star, col) ;
  filledRow += newline;

  if (row == 1) {
    return filledRow;
  }

  rectangle += filledRow;

  for (let currentRow = 1 ; currentRow < row - 1 ; currentRow++) {
    rectangle += getHollowLine(col - 2);
  }

  rectangle += filledRow;

  return rectangle;
}

const testGenerateEmptyRectangle = function() {
  assertEquals(generateEmptyRectangle(1,3), "***\n", "Single row", "generateEmptyRectangle()");
  assertEquals(generateEmptyRectangle(2,3), "***\n***\n", "Two rows", "generateEmptyRectangle()");
  assertEquals(generateEmptyRectangle(3,3), "***\n* *\n***\n", "3 rows", "generateEmptyRectangle()");
}



testGenerateEmptyRectangle();


//------------------------------- Repeated rectangles ------------------------------------


const generateRepeatedRectangle = function (row, col, r) {
  let pattern = "";

  for (let currentRow = 0 ; currentRow < row ; currentRow++) {
    for (let currentBlock = 0; currentBlock < r ; currentBlock++) {
      pattern += repeatSymbol(star, col);
      pattern += space;
    } 
    pattern += newline;
  }

  return pattern ;
}

const testGenerateRepeatedRectangle = function () {
  assertEquals(generateRepeatedRectangle(0, 2, 2), "", "For 0 rows ans should be Empty string", "generateRepeatedRectangle()");
  assertEquals(generateRepeatedRectangle(1, 2, 2), "** ** \n", "single row", "generateRepeatedRectangle()");
  assertEquals(generateRepeatedRectangle(2, 2, 2), "** ** \n** ** \n", "two  rows", "generateRepeatedRectangle()");
}


testGenerateRepeatedRectangle();




//--------------------------------- Left Aligned Triangle ------------------------------

const generateLeftAlignedTriangle = function (row) {
  let triangle = "";

  for (let currentRow = 1 ; currentRow <= row ; currentRow++) {
    triangle += repeatSymbol(star, currentRow);
    triangle += newline;
  }

  return triangle;
}


const testGenerateLeftAlignedTriangle = function () {
  assertEquals(generateLeftAlignedTriangle(0), "", "For 0 rows ans should be Empty string","leftAlignedTriangle()");
  assertEquals(generateLeftAlignedTriangle(2), "*\n**\n", "Triangle of 2 rows","leftAlignedTriangle()");
}


testGenerateLeftAlignedTriangle();



//--------------------------------------- Right Aligned Triangle -----------------------------------


const generateRightAlignedTriangle = function (row) {
  let triangle = "";

  for (let currentRow = 1 ; currentRow <= row ; currentRow++) {
    triangle += repeatSymbol(space, row - currentRow);
    triangle += repeatSymbol(star, currentRow);
    triangle += newline;
  }

  return triangle;
}


const testGenerateRightAlignedTriangle = function () {
  assertEquals(generateRightAlignedTriangle(0), "", "For 0 rows ans should be Empty string ","rightAlignedTriangle()");
  assertEquals(generateRightAlignedTriangle(2), " *\n**\n", "Triangle of 2 rows","rightAlignedTriangle()");
  assertEquals(generateRightAlignedTriangle(3), "  *\n **\n***\n", "Triangle of 3 rows","rightAlignedTriangle()");
}


testGenerateRightAlignedTriangle();


//----------------------------------- Diamond ---------------------------------------------


const generateDiamond = function (row) {
  let pattern = "";
  let noOfSpaces = (row - 1) / 2 ;
  let noOfSymbol = 1;

  for (let currentRow = 1 ; currentRow <= row ; currentRow++) {
    pattern += repeatSymbol(space, Math.abs(noOfSpaces));
    pattern += repeatSymbol(star, noOfSymbol);
    pattern += newline;

    noOfSpaces--;
    noOfSymbol = row - 2 * Math.abs(noOfSpaces);

  }

  return pattern;
}

const testGenerateDiamond = function() {
  assertEquals(generateDiamond(0), "", "For 0 rows ans should be Empty string  ","generateDiamond()");
  assertEquals(generateDiamond(3), " *\n***\n *\n", "Diamond of 3 rows", "generateDiamond()");
  assertEquals(generateDiamond(5), "  *\n ***\n*****\n ***\n  *\n", "Diamond of 5 rows","generateDiamond()");
}

testGenerateDiamond();




//---------------------------------------------------------------------------------------------------------------------------------
