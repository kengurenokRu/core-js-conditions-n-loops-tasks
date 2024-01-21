/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number < 0) return false;
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > a && b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  switch (num) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    case 7:
      return 'VII';
    case 8:
      return 'VIII';
    case 9:
      return 'IX';
    case 10:
      return 'X';
    case 11:
      return 'XI';
    case 12:
      return 'XII';
    case 13:
      return 'XIII';
    case 14:
      return 'XIV';
    case 15:
      return 'XV';
    case 16:
      return 'XVI';
    case 17:
      return 'XVII';
    case 18:
      return 'XVIII';
    case 19:
      return 'XIX';
    case 20:
      return 'XX';
    case 21:
      return 'XXI';
    case 22:
      return 'XXII';
    case 23:
      return 'XXIII';
    case 24:
      return 'XXIV';
    case 25:
      return 'XXV';
    case 26:
      return 'XXVI';
    case 27:
      return 'XXVII';
    case 28:
      return 'XXVIII';
    case 29:
      return 'XXIX';
    case 30:
      return 'XXX';
    case 31:
      return 'XXXI';
    case 32:
      return 'XXXII';
    case 33:
      return 'XXXIII';
    case 34:
      return 'XXXIV';
    case 35:
      return 'XXXV';
    case 36:
      return 'XXXVI';
    case 37:
      return 'XXXVII';
    case 38:
      return 'XXXVIII';
    case 39:
      return 'XXXIX';
    default:
      return false;
  }
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let str = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i !== 0) str += ' ';
    switch (numberStr[i]) {
      case '1':
        str += 'one';
        break;
      case '2':
        str += 'two';
        break;
      case '3':
        str += 'three';
        break;
      case '4':
        str += 'four';
        break;
      case '5':
        str += 'five';
        break;
      case '6':
        str += 'six';
        break;
      case '7':
        str += 'seven';
        break;
      case '8':
        str += 'eight';
        break;
      case '9':
        str += 'nine';
        break;
      case '0':
        str += 'zero';
        break;
      case ',':
        str += 'point';
        break;
      case '.':
        str += 'point';
        break;
      case '-':
        str += 'minus';
        break;
      default:
        return false;
    }
  }
  return str;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const strTemp = `${str}~`;
  let i = 0;
  while (strTemp[i] !== '~') i += 1;
  let p = i - 1;
  for (let k = 0; k < i / 2; k += 1) {
    if (strTemp[k] !== strTemp[p]) return false;
    p -= 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  const strTemp = `${str}~`;
  let k = 0;
  while (strTemp[k] !== '~') {
    if (strTemp[k] === letter) return k;
    k += 1;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let temp = num;
  while (temp !== 0) {
    const k = temp % 10;
    if (k === digit) return true;
    temp = Math.floor(temp / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let k1 = 0;
  let k2 = 0;
  for (let i = 0; i < arr.length; i += 1) {
    k1 += arr[i];
    k2 = 0;
    for (let j = arr.length - 1; j > i + 1; j -= 1) k2 += arr[j];
    if (k1 === k2) return i + 1;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) matrix[i] = [];
  let ib = 0;
  let jb = 0;
  let ie = size - 1;
  let je = size - 1;
  let t = 1;
  while (ib <= ie) {
    for (let j = jb; j <= je; j += 1) {
      matrix[ib][j] = t;
      t += 1;
    }
    for (let i = ib + 1; i <= ie; i += 1) {
      matrix[i][je] = t;
      t += 1;
    }
    for (let j = je - 1; j >= jb; j -= 1) {
      matrix[ie][j] = t;
      t += 1;
    }
    for (let i = ie - 1; i > ib; i -= 1) {
      matrix[i][jb] = t;
      t += 1;
    }
    ib += 1;
    ie -= 1;
    jb += 1;
    je -= 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  if (matrix.length === 0) return [];
  const newArr = new Array(matrix[0].length);
  for (let i = 0; i < matrix[0].length; i += 1) newArr[i] = [];

  for (let i = 0; i < matrix.length; i += 1) {
    let k = 0;
    for (let j = matrix[i].length - 1; j >= 0; j -= 1) {
      newArr[i][k] = matrix[j][i];
      k += 1;
    }
  }
  const newArr2 = matrix;
  for (let i = 0; i < matrix.length; i += 1)
    for (let j = 0; j < matrix[i].length; j += 1) newArr2[i][j] = newArr[i][j];
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const arr2 = arr;
  const b = arr2.length;
  let k = Math.floor(b / 2);
  while (k > 0) {
    for (let i = 0; i <= b - k - 1; i += 1) {
      let j = i;
      while (j >= 0 && arr2[j] > arr2[j + k]) {
        const h = arr2[j];
        arr2[j] = arr2[j + k];
        arr2[j + k] = h;
        j -= 1;
      }
    }
    k = Math.floor(k / 2);
  }
  return arr2;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let str2 = str;
  for (let i = 1; i <= iterations; i += 1) {
    let strTemp1 = '';
    let strTemp2 = '';
    for (let k = 0; k < str2.length; k += 2) {
      strTemp1 += str2[k];
      strTemp2 += str2[k + 1];
    }
    str2 = strTemp1 + strTemp2;
    if (str2 === str)
      return shuffleChar(str2, iterations - Math.floor(iterations / i) * i);
  }
  return str2;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let pos1 = -1;
  let pos2 = -1;
  const strNumber = [];
  const tempStr = [];
  let p = number;
  let t = -1;
  while (p !== 0) {
    t += 1;
    tempStr[t] = p % 10;
    p = Math.floor(p / 10);
  }
  t = -1;
  for (let i = tempStr.length - 1; i >= 0; i -= 1) {
    t += 1;
    strNumber[t] = tempStr[i];
  }
  for (let i = strNumber.length - 1; i > 0; i -= 1) {
    if (strNumber[i] > strNumber[i - 1]) {
      pos1 = i - 1;
      break;
    }
  }
  if (pos1 === -1) return number;
  pos2 = pos1 + 1;
  for (let i = pos1 + 1; i < strNumber.length; i += 1) {
    if (
      strNumber[pos1] < strNumber[i] &&
      strNumber[pos2] >= strNumber[i] &&
      strNumber[pos2] !== strNumber[i]
    ) {
      pos2 = i;
    }
  }
  if (pos2 === pos1) return number;
  let str = '';
  for (let i = 0; i < strNumber.length; i += 1) {
    if (i !== pos1 && i !== pos2) {
      str += strNumber[i];
    } else if (i === pos1) {
      str += strNumber[pos2];
    } else {
      str += strNumber[pos1];
    }
  }

  p = parseInt(str, 10);
  t = -1;
  while (p !== 0) {
    t += 1;
    tempStr[t] = p % 10;
    p = Math.floor(p / 10);
  }
  t = -1;
  for (let i = tempStr.length - 1; i >= 0; i -= 1) {
    t += 1;
    strNumber[t] = tempStr[i];
  }
  for (let i = pos1 + 1; i <= strNumber.length - 1; i += 1)
    for (let j = pos1 + 1; j <= strNumber.length - 2; j += 1) {
      if (strNumber[j] > strNumber[j + 1]) {
        str = '';
        for (let k = 0; k < strNumber.length; k += 1) {
          if (k !== j && k !== j + 1) {
            str += strNumber[k];
          } else if (k === j) {
            str += strNumber[j + 1];
          } else {
            str += strNumber[j];
          }
        }
        p = parseInt(str, 10);
        t = -1;
        while (p !== 0) {
          t += 1;
          tempStr[t] = p % 10;
          p = Math.floor(p / 10);
        }
        t = -1;
        for (let d = tempStr.length - 1; d >= 0; d -= 1) {
          t += 1;
          strNumber[t] = tempStr[d];
        }
      }
    }
  str = '';
  for (let i = 0; i < strNumber.length; i += 1) str += strNumber[i];
  return parseInt(str, 10);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
