function cryptosquareEncoder(string) {
  var filteredString = string.replace(/\W/g, '');
  var count = filteredString.length;
  var squareSize = Math.ceil(Math.sqrt(count));
  var arr = [];
  var result = "";

  for(var row = 0; row < squareSize; row++){
    var tempStr = "";
    for(var column = 0; column < squareSize; column++){
      if (filteredString[(row * squareSize) + column] === undefined) {
        tempStr += " "
      } else {
        tempStr += filteredString[(row * squareSize) + column];
      }
      if (tempStr.length === squareSize) {
        arr.push(tempStr)
      }
    };
  };

  for(var column = 0; column < squareSize; column++) {
    for(var row = 0; row < squareSize; row++) {
      result += arr[row].charAt(column)
    };
  };

  result = result.replace(/\s/g, '').split("");

  for (var i = 5; i < result.length; i += 6){
    result.splice(i, 0, " ")
  }

  return result.join("").toLowerCase();
};
