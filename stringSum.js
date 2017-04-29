/*


Question

Given two arbitrary length integers, represented as strings, return their sum, represented as a string.


sum(“1”, “2”) # returns “3”

*/

function stringSum(str1, str2) {
  // Decelare result
  var result = '';
  // Convert the strings into integers
  var num1, num2, sum, largerStr, smallerStr, overlapIndex;
  var carry = 0;
  
  // Iterate through each string
  str1.length > str2.length ? largerStr = str1 : largerStr = str2;
  str1.length > str2.length ? smallerStr = str2 : smallerStr = str1;

  overlapIndex = str2.length - str1.length;
  overlapIndex < 0 ? overlapIndex = -overlapIndex : overlapIndex = overlapIndex;
  
  for (var i = largerStr.length - 1; i >= 0; i--) {
    if (i >= overlapIndex) {
      sum = Number(largerStr[i]) + Number(smallerStr[i - overlapIndex]) + carry;
    } else {
      sum = Number(largerStr[i]) + carry;
    }
    
    if (sum > 10) {
      sum = sum.toString().substring(1);
      carry = 1;
    } else {
      sum = sum.toString();
      carry = 0;
    }
    
    result += sum;
  }

  result = result.split('').reverse().join('');
  console.log('result', result);
  return result;
}

stringSum("1999", "1999");
