function longestWords(str) {
  let words = str.split(" ");
  let size = 0;
  let max = [""];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= size) {
      size = words[i].length;
      if (max[max.length - 1].length < words[i].length) {
        max = [];
        max.push(words[i]);
      } else {
        max = [...max, words[i]];
      }
    }
  }
  return [...max];
}

console.log(longestWords("I woke Up early today"));
console.log(longestWords("i went straight to the beach"));

//////solution #2

function longestWords(str) {
  let words = str.split(" ");
  let arrayLengths = words.map(e => e.length);
  let maxLength = Math.max(...arrayLengths);
  let longest = words.filter(e => e.length === maxLength);
  return longest;
}

console.log(longestWords("i woke up early today"));
console.log(longestWords("i went straight to the beach"));
