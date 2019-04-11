function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(longestWord("I woke Up early today"));
console.log(longestWord("i went straight to the beach"));

///////////Another Solution

words = "hello everybody how are you";

let toAr = words.split(" ");

console.log(toAr);

let res = toAr.reduce((a, b) => {
  return a.length > b.length ? a : b;
});

console.log(res);
