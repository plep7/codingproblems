function reverseParentheses(s) {
    var sArray = [], index = 0, reverseCounter = 0, result;
    // Iterate through the string
    for (var i = 0; i < s.length; i++) {
    // Break the string into sections forward and reverse sections
        // Increment counter for open parens
        if (s[i] === '(') {
            if (reverseCounter > 0) {
                sArray[index] = sArray[index] || [];
                sArray[index].push(s[i])
            }
            reverseCounter++;
            // If reverseCounter went from 0 to 1 increase index
            if (reverseCounter === 1) index++;
        }
        // Decrement reverseCounter for close parens
        else if (s[i] === ')') {
            reverseCounter--;
            if (reverseCounter > 0) {
                sArray[index] = sArray[index] || [];
                sArray[index].push(s[i])
            }
            // If reverseCounter went from 1 to 0 increase index
            if (reverseCounter === 0) index++;
        }  else {
            // If index array doesn't exist, create empty array
            sArray[index] = sArray[index] || [];
            // Push string element into index array
            sArray[index].push(s[i])
        }
        
    }
    console.log('sArray', sArray)
    // Iterate through sArray
    for (var j = 0; j < sArray.length; j++) {
    // Reverse the odd indexed sections of sArray
        sArray[j] = sArray[j] || [''];
        console.log('stringElement',sArray[j])
        sArray[j] = sArray[j].join('');
        if (sArray[j].includes('(')) {
        // Call function recursively
            console.log('needs reversal', sArray[j])
            sArray[j] = reverseParentheses(sArray[j]);
        }
        if (j % 2 === 1) {
            sArray[j] = sArray[j].split('').reverse().join('');
        }
    }
    // Concatenate sections into whole string
    result = sArray.join('');
    console.log('result', result)
    return result;
}