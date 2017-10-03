function countLetters(string) {
  var listLetters = {};
  var singleString = string.replace(/ +/g, "");

  for (i = 0; i < singleString.length; i++) {
    if (singleString[i] in listLetters) {
      listLetters[singleString[i]] += 1;
    } else {
      listLetters[singleString[i]] = 1;
    }
  }
  return listLetters;
}


console.log(countLetters("lighthouse in the house"));