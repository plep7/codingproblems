function smallestPalindrome(s0) {
  var reverseIndex, halfway, toggle, isEven;
  s0.length % 2 === 0 ? isEven = true : isEven = false;
  halfway = Math.ceil(s0.length / 2 - 1);
  for (var i = halfway; i >= 0; i--) {
    // console.log(s0)
    reverseIndex = s0.length - i - 1;
    console.log('i', s0[i])
    console.log('e', s0[reverseIndex])
    if (s0[i] <= s0[reverseIndex]) {
      if (!toggle) {
        toggle = true;
        if (isEven) {
          s0 = s0.substring(0, i) + s0.charAt(reverseIndex) + s0.substring(i + 1, s0.length);
        } else if (s0[i - 1] <= s0[reverseIndex + 1]) {
          s0 = s0.substring(0, i) + String.fromCharCode(s0.charAt(reverseIndex).charCodeAt() + 1) + s0.substring(i + 1, s0.length);
        }
      } else {
        s0 = s0.substring(0, reverseIndex) + s0.charAt(i) + s0.substring(reverseIndex + 1, s0.length);
      }
    }
  
    console.log(s0);
    console.log('===================')
  }
  return s0;
}


smallestPalindrome('abcdc')
    // 143812 112211 
    // 143341
    // || 11122 11211
    // 
    // 
    // 
    // 143812
    // 143811
    // 143841
    // 148841
    // 
    // 
    // 
    // 