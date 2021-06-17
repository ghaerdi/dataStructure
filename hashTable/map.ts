import { normalize } from "../utils.ts";

function countWords(text: string): Map<string, number> {
  const count = new Map();
  const words = normalize(text).split(' ')

  for (let word of words) {
    let value = count.get(word);
    count.set(word, value ? value + 1 : 1);
  }

  return count;
}

console.log(countWords("el pepe, ajio pepe"));