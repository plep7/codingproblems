function splitEvensAndOdds(arr) {
  var evenArr = [], oddArr = [];

  arr.forEach(element => {
    element % 2 === 0 ? evenArr.push(element) : oddArr.push(element);
  })
  console.log(evenArr)
  console.log(oddArr)
}

var testArray = [1, 2, 5, 3, 16, 45, 78, 90, 13, 52, 88, 23]
splitEvensAndOdds(testArray)