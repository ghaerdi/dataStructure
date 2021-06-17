class HashValueable<Value> {
  [key: number]: Value;

  public add(value: Value) {
    const index = this.newIndex(value);
    if (this[index]) {
      throw `[${value}] Index ${index} already have a value: ${this[index]}`;
    }
    this[index] = value;
  }

  public getIndex(value: Value): number {
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

  public update(index: number, value: Value) {
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

  private newIndex(value: Value): number {
    let valueValueoString: string;
    if (typeof value === "object") {
      valueValueoString = JSON.stringify(value);
    } else {
      valueValueoString = String(value);
    }
    const chars = this.toChars(valueValueoString);
    const code = this.hash(chars);
    return code;
  }

  private ascii(char: string): number {
    return char.charCodeAt(0);
  }
}

export default HashValueable;
