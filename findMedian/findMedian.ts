import { Element } from "../types.ts";

class MedianFinder {
  public length: number;
  public head: Element<number>;

  constructor() {
    this.length = 0;
    this.head = null!;
  }

  public add(value: number): void {
    if (!this.head) {
      this.head = { value };
    }
  
    this.head = { value, next: this.head };
    this.length++;
  }

  public getMedian(): number {
    let temp: Element<number> = this.head;
    let result: number = this.getMiddle(temp)!;
    
    if (result) return result;

    result = temp.value;
    for (let count = 0; count < this.length-1; count++) {
      if (temp.next) {
        result += temp.next.value;
        temp = temp.next;
      }
    }

    result = result / this.length;
    return result;
  }

  private getMiddle(temp: Element<number>): number | undefined {
    if (this.length%2) {
      for (let count = 0; count < Math.floor(this.length/2); count++) {
        if (temp.next) {
          temp = temp.next!;
        }
      }
      return temp?.value!;
    }
  }
}
