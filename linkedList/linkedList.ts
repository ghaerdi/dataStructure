import { Node } from "../types.ts";
import OneWayLinkedList from "./oneWayLinkedList.ts"

class LinkedList<Value> extends OneWayLinkedList<Value> {
  public add(value: Value): void {
    const element: Node<Value> = { value };

    if (!this.isEmpty()) {
      element.next = this.head;
      this.head.previous = element;
    } else {
      this.tail = element;
    }

    this.head = element;
    this.length++;
  }

  public push(value: Value): void {
    const element: Node<Value> = { value };

    if (!this.isEmpty()) {
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
      const element: Node<Value> = this.head.next!;
      delete element?.previous;
      this.head = element;
      this.length--;
      return;
    }

    const element: Node<Value> = this.get(index);
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

  public pop(): Node<Value> {
    this.noElementError("remove");
    const removedElement: Node<Value> = this.tail;

    if (this.length === 1) {
      console.log("last element")
      this.head = null!;
      this.tail = null!;
    } else {
      const penultimateElement: Node<Value> = removedElement.previous!;
      if (penultimateElement) {
        delete penultimateElement.next;
      }
      this.tail = penultimateElement;
    }

    this.length--;
    return removedElement;
  }
}

export default LinkedList;
