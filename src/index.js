module.exports = function check(str, bracketsConfig) {
  const twoBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
      twoBrackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  }

  let oldStr = str;
  while (true) {
      for (let i = 0; i < twoBrackets.length; i++) {
          str = str.replace(twoBrackets[i], '');
      }

      if (str.length == 0) {
          return true;
      }
      if (oldStr === str) {
          return false;
      }

      oldStr = str;
  }
};


