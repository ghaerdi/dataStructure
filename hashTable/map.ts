import { CObject } from "../types.ts";
import { normalize } from "../utils.ts";

function countWords(text: string): CObject<string, number> {
  const count: CObject<string, number> = {}
  const words = normalize(text).split(' ')

  for (let word of words) {
    let value = count[word]
    count[word] = value ? value + 1 : 1
  }

  return count
}