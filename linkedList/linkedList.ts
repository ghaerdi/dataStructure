import { Node } from "../types.ts";

export default class LinkedList<T> {
  public length: number;
  public head: Node<T>
  public tail: Node<T>

  constructor() {
    this.length = 0;
    this.head = null!;
    this.tail = null!;
  }

  public add(value: T): void {
    const element: Node<T> = { value };

    if (this.head) {
      element.next = this.head;
      this.head.previous = element;
    } else {
      this.tail = element;
    }

    this.head = element;
    this.length++;
  }

  public push(value: T): void {
    const element: Node<T> = { value };

    if (this.tail) {
      element.previous = this.tail;
      this.tail.next = element;
    } else {
      this.head = element
    }

    this.tail = element;
    this.length++;
  }

  public pop(): Node<T> {
    if (!this.length) {
      throw "No elements to remove";
    }

    const tempLast: Node<T> = this.tail;
    const penultimate: Node<T> = tempLast.previous!;

    if (penultimate) {
      penultimate.next = null!;
    } else {
      this.head = penultimate!;
    }
    this.tail = penultimate!;

    this.length--;
    return tempLast;
  }

  public remove(index: number): Node<T> {
    if (!this.length) {
      throw "No elements to remove";
    }

    let element: Node<T> = this.get(index);

    if (index === 0) {
      element = this.head;
      this.head = element.next!;
      this.length--;
      if (!element.next) {
        this.tail = null!;
        return element;
      }
    }

    const previous: Node<T> = element.previous!;
    const next: Node<T> = element.next!; 

    if (index === this.length-1) {
      this.pop();
    } 

    if (previous?.next) {
      previous.next = next;
    }
    if (next?.previous) {
      next.previous = previous;
    }

    this.length--;
    return element;
  }

  public get(index: number): Node<T> { 
    if (this.length) {
      throw "No elements to get"
    }
    let temp: Node<T> = this.head;

    if (index < this.length - index) {
      for (let count = 0; count < index; count++) {
       temp = temp.next!;
      }
    } else {
      temp= this.tail;
      for (let count = 0; count < this.length - index - 1; count++) {
       temp= temp.previous!;
      }
    }

    return temp;
  }

  public getFirst(): Node<T> {
    return this.head;
  }

  public getLast(): Node<T> {
    return this.tail;
  }
}

const names = new LinkedList<string>();
names.add("pepe");
names.add("pepe1");
names.add("pepe2");
console.log(names.remove(0));
console.log(names.remove(0));
console.log(names.remove(0));
console.log(names)
