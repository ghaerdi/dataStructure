class HashTable {
  [key: number]: any;

  public add(value: any) {
    const index = this.newIndex(value);
    if (this[index]) {
      throw `[${value}] Index ${index} already have a value: ${this[index]}`;
    }
    this[index] = value;
  }

  public getIndex(value: any): number {
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

  public update(index: number, newValue: any) {
    this.remove(index);
    this.add(newValue);
  }

  private toChars(text: string): string[] {
    return text.split("");
  }
  
  
  private newCode(chars: string[]): number {
    let code: number = 0;
    for (let index = 0; index < chars.length; index++) {
      code += this.ascii(chars[index]) * (index + 1);
    }
  
    return code;
  }

  private newIndex(value: any): number {
    value = String(value);
    const chars = this.toChars(value);
    const code = this.newCode(chars);
    return code;
  }
}

const hash = new HashTable();
hash.add("pepe");
hash.add("ajio");
hash.add("yolo");
hash.add("mgg");
hash.add(4);
hash.add(43);
hash.add(2000);
hash.remove("pepe");
console.log(hash);
