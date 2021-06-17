import { Node } from "../types.ts";

class OneWayLinkedList<Value> {
  protected head: Node<Value> = undefined!;
  protected tail: Node<Value> = undefined!;
  public length: number = 0;

  public get(index: number): Node<Value> {
    this.noElementError("get");
    if (index > this.length-1 || index < 0) throw "index out of range";

    let temporal: Node<Value> = this.head;
    for (let count = 0; count < index; count++) {
      temporal = temporal.next!;
    }

    return temporal;
  }

  public getLast(): Node<Value> {
    return this.tail;
  }

  public find(value: Value, returnNode?: boolean): Node<Value> | number {
    this.noElementError("find");
    let element: Node<Value> = this.head;
    let count = 0;

    for (; count < this.length; count++) {
      if (element.value === value) break;
      element = element.next!;
    }

    if (returnNode) return element;

    return count;
  }

  // Add Node
  public add(value: Value): void {
    const element: Node<Value> = { value };
    if (!this.isEmpty()) {
      element.next = this.head;
    } else {
      this.tail = element;
    }
    this.head = element;
    this.length++;
  }

  public push(value: Value): void {
    const element: Node<Value> = { value };
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

    const previousElement: Node<Value> = this.get(index-1);
    previousElement.next = previousElement.next?.next!;
    this.length--;
  }

  public pop(): Node<Value> {
    this.noElementError("remove");
    let removedElement: Node<Value> = this.tail;
    if (this.length === 1) {
      this.head = undefined!;
      this.tail = undefined!;
    } else {
      const element: Node<Value> = this.get(this.length-2);
      delete element.next;
      this.tail = element;
    }
    this.length--;
    return removedElement;
  }

  public update(index: number, value: Value): Node<Value> {
    const element: Node<Value> = this.get(index);
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