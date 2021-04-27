import { Node } from "../types.ts";
import OneWayLinkedList from "./oneWayLinkedList.ts"

class LinkedList<T> extends OneWayLinkedList<T> {
  public add(value: T): void {
    const element: Node<T> = { value };

    if (!this.isEmpty()) {
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

    if (this.isEmpty()) {
      element.previous = this.tail;
      this.tail.next = element;
    } else {
      this.head = element
    }

    this.tail = element;
    this.length++;
  }

  public remove(index: number): void {
    this.noElementError("remove");
    if (index === this.length-1) {
      this.pop();
      return;
    }
    if (index === 0) {
      const element: Node<T> = this.head.next!;
      delete element?.previous;
      this.head = element;
      return;
    }

    const element: Node<T> = this.get(index);
    const previousElement = element.previous;
    const nextElement = element.next;
    if (previousElement) {
      previousElement.next = element.next;
    }
    if (nextElement) {
      nextElement.previous = element.previous;
    }
    this.length--;
  }
}

const names = new LinkedList<string>();
names.add("pepe");
names.add("pepe1");
names.add("pepe2");
names.remove(2);
console.log(names)

export default LinkedList;
