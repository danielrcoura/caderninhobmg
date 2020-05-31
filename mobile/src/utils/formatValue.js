const formatValue = (value) => {
  let strValue = value + '';
  let decimalCounter = 2;

  if(strValue.includes('.')) {
    strValue = strValue.replace('.', ',');
    let pointFound = false;
    for(let char of strValue.split('')) {
      if(pointFound) {
        decimalCounter -= 1;
      }
      if(char === ',') {
        pointFound = true;
      }
    }
  }
  else{
    strValue += ',';
  }
  for(let cont = 0; cont < decimalCounter; cont += 1) {
    strValue += '0';
  }
  return 'R$ ' + strValue;
}
export default formatValue;
