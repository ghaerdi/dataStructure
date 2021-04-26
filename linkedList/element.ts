class Element {
  public value: any;
  private nextElement: Element;
  private previousElement: Element;

  constructor(value: any, nextElement?: Element, previousElement?: Element) {
    this.value = value;
    this.nextElement = nextElement!;
    this.previousElement = previousElement!;
  }

  public getNext(): Element {
    return this.nextElement;
  }

  public getPrevious(): Element {
    return this.previousElement;
  }

  public addNext(element: Element) {
    this.nextElement = element;
  }

  public addPrevious(element: Element) {
    this.previousElement = element;
  }

  public removeNext(): void {
    this.nextElement = undefined!;
  }

  public removePrevious(): void {
    this.previousElement = undefined!;
  }
}

export default Element;
