function letterPositions(string) {
  var listLetters = {};
  var singleString = string.replace(/ +/g, "");

  for (i = 0; i < singleString.length; i++) {
    if (singleString[i] in listLetters) {
      listLetters[singleString[i]].push(i);
    } else {
      listLetters[singleString[i]] = [i];
    }
  }
  return listLetters;
}