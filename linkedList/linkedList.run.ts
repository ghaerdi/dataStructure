import LinkedList from "./linkedList.ts"

function addNumbers(ll: LinkedList<number>, limit: number): LinkedList<number> {
  for (let num = 0; num < limit; num++) {
    ll.add(num)
  }
  return ll
}

function pushNumbers(ll: LinkedList<number>, limit: number): LinkedList<number> {
  for (let num = 0; num < limit; num++) {
    ll.push(num)
  }
  return ll
}

function removeNumbers(ll: LinkedList<number>, limit: number): LinkedList<number> {
  for (let repeat = 0; repeat < limit; repeat++) {
    ll.remove(0)
  }
  return ll
}

function popNumbers(ll: LinkedList<number>, limit: number): LinkedList<number> {
  for (let repeat = 0; repeat < limit; repeat++) {
    ll.pop()
  }
  return ll
}