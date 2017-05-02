function smallestPalindrome(s0) {
  var reverseIndex, halfway, toggle, isEven, incLetter, j, k;
  console.log('=====================')
  s0.length % 2 === 0 ? isEven = true : isEven = false;
  halfway = Math.ceil(s0.length / 2 - 1);
  for (var i = halfway; i >= 0; i--) {
    reverseIndex = s0.length - i - 1;
    // console.log('i', s0[i])
    // console.log('e', s0[reverseIndex])

    if (!toggle) {
      if (s0[i] < s0[reverseIndex]) {
        toggle = true;
        // console.log(s0[i], 'is less than', s0[reverseIndex])
        incLetter = String.fromCharCode(s0.charAt(i).charCodeAt() + 1);
        s0 = s0.substring(0, i) + incLetter + s0.substring(i + 1, s0.length)
        s0 = s0.substring(0, reverseIndex) + incLetter + s0.substring(reverseIndex + 1, s0.length)
      } else if (s0[i] === s0[reverseIndex]) {
        // console.log(s0[i], 'is equal to', s0[reverseIndex])
        j = i;
        k = reverseIndex;
        while (s0[j] && s0[j] === s0[k]) {
          j--;
          k++;
        }

      } else {
        s0 = s0.substring(0, reverseIndex) + s0[i] + s0.substring(reverseIndex + 1, s0.length)
      }
    } else {
        if (s0[i] < s0[reverseIndex]) {
          s0 = s0.substring(0, reverseIndex) + s0[i] + s0.substring(reverseIndex + 1, s0.length)

      } else if (s0[i] === s0[reverseIndex]) {
      } else {
      }
    }





    // console.log(s0);
    // console.log('===================')




  }
  console.log(s0)
  return s0;
}
// incLetter = String.fromCharCode(s0.charAt(i).charCodeAt() + 1);
smallestPalindrome('cbaba')
console.log('cbabc')

smallestPalindrome('abcbc')
console.log('abdba')

smallestPalindrome('aaaa')
console.log('aaaa')

smallestPalindrome('xgdfcs')
console.log('xgeegx')

smallestPalindrome('aazzzzba')
console.log('abaaaaba')

smallestPalindrome('abac')
console.log('abba')

smallestPalindrome('slejfldsjlfe')
console.log('slejfllfjels')
