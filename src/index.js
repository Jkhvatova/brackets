module.exports = function check(str, bracketsConfig) {
  // your solution
  const brackets = Object.fromEntries(bracketsConfig);
  const openBrackets = Object.keys(brackets);
  const swappedBracketsPairs = Object.fromEntries(Object.entries(brackets).map(
    ([key, value]) => [value, key]
  ));

  if (str.length % 2 !== 0) {
    return false;
  }


    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      let topElement = stack[stack.length - 1];

      if (openBrackets.includes(currentSymbol)) {

        if (topElement === '7' && currentSymbol === '7' || topElement === '8' && currentSymbol === '8' || topElement === '|' && currentSymbol === '|') {
          stack.pop();
        } else {
          stack.push(currentSymbol);
        }

      } else {
        if (stack.length === 0) {
          return false;
        }
   
        if (swappedBracketsPairs[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
}
