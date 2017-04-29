function nthPrimeNumber(n) {
  // Initialize a counter
  var counter = 0, integer = 2;
  // While counter is less than n
  while (counter < n) {
    //Increment counter if an integer is prime
    console.log(counter, integer, isPrime(integer))
    isPrime(integer) && counter++;
    // Increment integer
    integer++;
  // Return value once counter reaches n
  }
  console.log('result', integer - 1)
  return integer - 1;
}

// Determine if a number is prime
function isPrime(number) {
  if (number === 1) return false
  // Iterate from 2 to sqare root of the number
  for (var i = 2; i <= Math.sqrt(number); i++) {
    // Return false if the number is divisible by the incrementing value
    if (number % i === 0) return false
  }
  // return true
   return true;
}


nthPrimeNumber(100)