// Given two words, beginWord and endWord, and a wordList of approved words, find the length of the shortest transformation sequence from beginWord to endWord such that:

// Only one letter can be changed at a time
// Each transformed word must exist in the wordList.
// Return the length of the shortest transformation sequence, or 0 if no such transformation sequence exists.

// Note: beginWord does not count as a transformed word. You can assume that beginWord and endWord are not empty and are not the same.

// Example

// For beginWord = "hit", endWord = "cog", and wordList = ["hot", "dot", "dog", "lot", "log", "cog"], the output should be
// wordLadder(beginWord, endWord, wordList) = 5.

// The shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog" with a length of 5.

// const beginWord = "teach";
// const endWord = "place";
// const wordList = [
//   "peale",
//   "wilts",
//   // "place",
//   "fetch",
//   "purer",
//   "pooch",
//   "peace",
//   "poach",
//   "berra",
//   "teach",
//   "rheum",
//   "peach"
// ];

// teach - peach - peace - place

var beginWord = "hit";
var endWord = "cog";
var wordList = ["hot", 
 "dot", 
 "dog", 
 "lot", 
 "log", 
 "cog"]


function wordLadder(beginWord, endWord, wordList) {
  // Initialize a queue of tuples and a currentWord
  var queue = [], currentTuple, isConnection, added = [];
  // Set the currentTuple to the beginWord
  currentTuple = [beginWord, 1];
  if (!wordList.includes(endWord)) return 0;

  // While there are still words in the queue
  while (queue.length > 0 || currentTuple[1] === 1) {
    isConnection = false;
    // Dequeue from the queue and set the current tuple
    if (queue.length > 0) currentTuple = queue.shift();
    // If the current word matches the end word, return the level
    if (currentTuple[0] === endWord) return currentTuple[1];
    // Compare the currentTuple to each word in the wordList
    for (var i = 0; i < wordList.length; i++) {
      // If the words has at most 1 different letter, enqueue the word and current level
      if (compareWords(currentTuple[0], wordList[i])) {
        isConnection = true;
        if (wordList[i] === endWord) {
          return currentTuple[1] + 1;
        } else if (!added.includes(wordList[i])) { 
          added.push(wordList[i]);
          queue.push([wordList[i], currentTuple[1] + 1]);
        }
      }
    }
    console.log(queue)
    if (!isConnection) return 0;
  }
}

function compareWords(currentWord, wordFromList) {
  // Initialize a counter
  var counter = 0;
  // Iterate through the strings
  for (var i = 0; i < currentWord.length; i++) {
    // If the letters aren't the same increment the counter
    if (currentWord[i] !== wordFromList[i]) counter++;
  }
  // If counter is 1 return true else return false
  return counter === 1
}

console.log(wordLadder(beginWord, endWord, wordList));