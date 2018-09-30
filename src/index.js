module.exports = function check(str, bracketsConfig) {

  const bracketArr = bracketsConfig.toString().split(',');
  const openBrackets = [];
  const closeBrackets = [];

  for (let i = 0, len = bracketArr.length; i < len; i++) {
    if (i % 2 > 0) {
      closeBrackets.push(bracketArr[i]);
    } else {
      openBrackets.push(bracketArr[i]);
    }
  }

  let value, matchingOpeningBracket;
  const stack = [str[0]];

  for (let s = 1, len = str.length; s < len; s++) {
    value = str[s];

    if (closeBrackets.indexOf(value) > -1) {
      matchingOpeningBracket = openBrackets[closeBrackets.indexOf(value)];
      if (stack.indexOf(matchingOpeningBracket) > -1) {
        if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
          return false;
        }
      } else {
        stack.push(matchingOpeningBracket);
      }
      
    } else {
      stack.push(value);
    }
  }
  return (stack.length == 0);
}
