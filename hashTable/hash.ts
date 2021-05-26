class HashTable<T> {
  [key: number]: T;

  public add(value: T) {
    const index = this.newIndex(value);
    if (this[index]) {
      throw `[${value}] Index ${index} already have a value: ${this[index]}`;
    }
    this[index] = value;
  }

  public getIndex(value: T): number {
    const index = this.newIndex(value);
    if (!this[index]) {
      throw "No element found";
    }
    return index;
  }

  public remove(index: number) {
    if (!this[index]) {
      throw "No element to remove";
    }
    delete this[index];
  }

  public update(index: number, value: T) {
    this.remove(index);
    this.add(value);
  }

  private toChars(value: string): string[] {
    return value.split("");
  }
  
  
  private hash(chars: string[]): number {
    let code: number = 0;
    for (let index = 0; index < chars.length; index++) {
      code += this.ascii(chars[index]) * (index + 1);
    }
  
    return code;
  }

  private newIndex(value: T): number {
    let valueToString: string;
    if (typeof value === "object") {
      valueToString = JSON.stringify(value);
    } else {
      valueToString = String(value);
    }
    const chars = this.toChars(valueToString);
    const code = this.hash(chars);
    return code;
  }

  private ascii(char: string): number {
    return char.charCodeAt(0);
  }
}

export default HashTable;
