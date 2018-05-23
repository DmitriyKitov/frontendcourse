function getLast(string) {
  var lastChar = string.length - 1;
  return string[lastChar]
}

function getLast2(string) {
  return string.slice(-1);
}

function getWithoutLast(string) {
  var stringWithoutLast = '';
  var lastChar = string.length - 1;
  for (var i = 0; i < lastChar; i++) {
    stringWithoutLast += string[i]
  }
  return stringWithoutLast
}

function getWithoutLast2(string) {
  var lastChar = string.length - 1;
  return string.slice(0, lastChar)
}

function getReverse(string) {
  var lastChar = string.length - 1;
  var reversedString = '';
  for (var i = lastChar; i >= 0; i--) {
    reversedString += string[i]
  }
  return reversedString
}

function getReverse2(string) {
  var array = string.split('');
  array.reverse();
  return array.join('')
}

function getWithoutSpaces(string) {
  var STATE_BEGIN = 'Begin';
  var STATE_SPACES = 'Spaces';
  var STATE_WORD = 'Word';
  var state = STATE_BEGIN;
  var formattedString = '';

  for (var i in string) {
    if (string[i] !== ' ') {
      if (state === STATE_SPACES)
        formattedString = formattedString + ' ';
      state = STATE_WORD
    }
    if (state === STATE_WORD)
      if (string[i] === ' ')
        state = STATE_SPACES;
      else
        formattedString = formattedString + string[i]
  }

  return formattedString;
}

function getWithoutSpaces2(string) {
  return string.trim().replace(/\s+/g, ' ');
}

string = prompt();

console.log('Исходная строка:');
console.log(string);

console.log('Последний символ:');
var result = getLast(string);
console.log(result);
result = getLast2(string);
console.log(result);

console.log('Без последнего символа:');
result = getWithoutLast(string);
console.log(result);
result = getWithoutLast2(string);
console.log(result);

console.log('Перевернутая строка:');
result = getReverse(string);
console.log(result);
result = getReverse2(string);
console.log(result);

console.log('Без лишних пробелов:');
result = getWithoutSpaces(string);
console.log(result);
result = getWithoutSpaces2(string);
console.log(result);