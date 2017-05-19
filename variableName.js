// Correct variable names consist only of Latin letters, digits and underscores and they can't start with a digit.

// Check if the given string is a correct variable name.

// Example

// For name = "var_1__Int", the output should be
// variableName(name) = true;
// For name = "qq-q", the output should be
// variableName(name) = false;
// For name = "2w2", the output should be
// variableName(name) = false.

function variableName(name) {
  return Number.isNaN(Number(name[0])) ? /^[0-9a-zA-Z_]+$/.test(name) : false ;

}

console.log(variableName("as-d"))
console.log(variableName("var_1__Int"))