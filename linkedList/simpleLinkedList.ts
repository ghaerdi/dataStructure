import Element from "./element.ts";

class SimpleLinkedList {
  protected firstElement: Element;
  protected lastElement: Element;
  public size: number;

  constructor(element?: Element) {
    this.firstElement = element!;
    this.lastElement = element!;
    this.size = element ? 1 : 0;
  }

  // Get Nodo
  public get(index: number): Element {
    if (index > this.size || index < 0) throw "index out of range";

    let temporal = this.firstElement;

    for (let count = 0; count < index; count++) {
      temporal = temporal.getNext();
    }

    return temporal;
  }

  public getFirst(): Element {
    return this.firstElement;
  }

  public getLast(): Element {
    return this.lastElement;
  }

  public find(value: any): Element {
    let temporal = this.firstElement;

    for (let count = 0; count < this.size; count++) {
      if (temporal.value === value) break;
      
      temporal = temporal.getNext();
    }

    return temporal;
  }

  // Add Nodo
  public add(element: Element): void {
    if (this.firstElement) {
      element.addNext(this.firstElement)
    } else {
      this.lastElement = element;
    }
    this.firstElement = element;

    this.size++;
  }

  public append(element: Element): void {
    if (this.lastElement) {
      this.lastElement.addNext(element);
    } else {
      this.firstElement= element;
    }
    this.lastElement = element;

    this.size++;
  }

  // Remove
  public remove(index?: number): void {
    if (index) {
      const previousNode = this.get(index - 1);
      const nextNode = previousNode.getNext().getNext();
      previousNode.addNext(nextNode);
    } else {
      this.removeFirst();
    }
    this.size--;
  }

  public removeFirst(): void {
    if (!this.firstElement) throw "There is nothing to remove";

    this.firstElement = this.firstElement.getNext();

    if (!this.firstElement) {
      this.lastElement = undefined!;
    }

    this.size--;
  }

  public removeLast(): void {
    if (!this.lastElement) throw "There is nothing to remove";

    const index = this.size - 2;
    const penultimateElement = index >= 0 ? this.get(index) : undefined;

    penultimateElement?.removeNext();
    this.lastElement = penultimateElement!;

    if (!this.lastElement) {
      this.firstElement= undefined!;
    }

    this.size--;
  }

  // List
  public isEmpty(): boolean {
    return this.size ? false : true;
  }
}

export default SimpleLinkedList;
