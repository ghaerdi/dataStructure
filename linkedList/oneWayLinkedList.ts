import { Node } from "../types.ts";

class OneWayLinkedList<T> {
  protected head: Node<T> = undefined!;
  protected tail: Node<T> = undefined!;
  public length: number = 0;

  public get(index: number): Node<T> {
    this.noElementError("get");
    if (index > this.length-1 || index < 0) throw "index out of range";

    let temporal: Node<T> = this.head;
    for (let count = 0; count < index; count++) {
      temporal = temporal.next!;
    }

    return temporal;
  }

  public getLast(): Node<T> {
    return this.tail;
  }

  public find(value: T, returnNode?: boolean): Node<T> | number {
    this.noElementError("find");
    let element: Node<T> = this.head;
    let count = 0;

    for (; count < this.length; count++) {
      if (element.value === value) break;
      element = element.next!;
    }

    if (returnNode) return element;

    return count;
  }

  // Add Node
  public add(value: T): void {
    const element: Node<T> = { value };
    if (!this.isEmpty()) {
      element.next = this.head;
    } else {
      this.tail = element;
    }
    this.head = element;
    this.length++;
  }

  public push(value: T): void {
    const element: Node<T> = { value };
    if (!this.isEmpty()) {
      this.tail.next = element;
    } else {
      this.head = element;
    }
    this.tail = element;
    this.length++;
  }

  // Remove
  public remove(index: number): void {
    this.noElementError("remove");
    if (index === this.length-1) {
      this.pop();
      return;
    }
    if (index === 0) {
      this.head = this.head.next!;
      return;
    }

    const previousElement: Node<T> = this.get(index-1);
    previousElement.next = previousElement.next?.next!;
    this.length--;
  }

  public pop(): Node<T> {
    this.noElementError("remove");
    let removedElement: Node<T> = this.tail;
    if (this.length === 1) {
      this.head = undefined!;
      this.tail = undefined!;
    } else {
      const element: Node<T> = this.get(this.length-2);
      delete element.next;
      this.tail = element;
    }
    this.length--;
    return removedElement;
  }

  public update(index: number, value: T): Node<T> {
    const element: Node<T> = this.get(index);
    element.value = value;
    return element;
  }

  public isEmpty(): boolean {
    return this.length ? false : true;
  }

  protected noElementError(action: string): void {
    if (this.isEmpty()) throw `No elements to ${action}`;
  }
}

export default OneWayLinkedList;