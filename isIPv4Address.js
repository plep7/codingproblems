// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating 
// in a computer network that uses the Internet Protocol for communication. There are two versions of the 
// Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

// IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, each 
// ranging from 0 to 255, separated by dots, e.g., 172.16.254.1.

// Given a string, find out if it satisfies the IPv4 address naming rules.

// Example

// For inputString = "172.16.254.1", the output should be
// isIPv4Address(inputString) = true;

// For inputString = "172.316.254.1", the output should be
// isIPv4Address(inputString) = false.

// 316 is not in range [0, 255].

// For inputString = ".254.255.0", the output should be
// isIPv4Address(inputString) = false.

// There is no first number.

function isIPv4Address(inputString) {
  var ipv4Array;
  // Split string into an array
  ipv4Array = inputString.split('.');
  // Return false if array length is less than 4
  if (ipv4Array.length !== 4) return false;
  // Iterate through the array
  for (var i = 0; i < ipv4Array.length; i++) {
    if (ipv4Array[i].length === 0) return false;
    currNum = Number(ipv4Array[i]);
    // Return false if any element is not a number or greater than 255 or less than 0
    if (Number.isNaN(currNum) || currNum > 255 || currNum < 0) return false;
  }
  return true;
}

isIPv4Address("1.1.1.1a")
