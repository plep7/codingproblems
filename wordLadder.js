// Given two words, beginWord and endWord, and a wordList of approved words, find the length of the shortest transformation sequence from beginWord to endWord such that:

// Only one letter can be changed at a time
// Each transformed word must exist in the wordList.
// Return the length of the shortest transformation sequence, or 0 if no such transformation sequence exists.

// Note: beginWord does not count as a transformed word. You can assume that beginWord and endWord are not empty and are not the same.

// Example

// For beginWord = "hit", endWord = "cog", and wordList = ["hot", "dot", "dog", "lot", "log", "cog"], the output should be
// wordLadder(beginWord, endWord, wordList) = 5.

// The shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog" with a length of 5.

const beginWord = "teach";
const endWord = "place";
const wordList = [
  "peale",
  "wilts",
  "place",
  "fetch",
  "purer",
  "pooch",
  "peace",
  "poach",
  "berra",
  "teach",
  "rheum",
  "peach"
];

// teach - peach - peace - place


function wordLadder(beginWord, endWord, wordList) {

}

console.log(wordLadder(beginWord, endWord, wordList));