var convertToDecimal = function convertToDecimal(arg) {
  var result = [] 
  arg.forEach((percent, index) => {
    result[index] = parseFloat(percent) / 100.0;
  });
  return result
}

console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]))