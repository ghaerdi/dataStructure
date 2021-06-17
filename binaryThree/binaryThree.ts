interface Element {
  value: number;
  parent?: Element;
  next?: Element;
  previous?: Element;
}

class binaryThree {
  public head: Element;

  constructor(value?: number) {
    this.head = value ? { value } : null!;
  }

  public add(value: number): Element {
    if (!this.head) {
      this.head = { value };
      return this.head;
    }

    let temp = this.head;

    while (true) {
      if (temp.value === value) {
        return temp;
      }

      if (temp.value < value) {
        if (!temp.next) {
          temp.next = {
            value,
            parent: temp
          }
          return temp.next;
        }
        temp = temp.next;
      }

      if (temp.value > value) {
        if (!temp.previous) {
          temp.previous = {
            value,
            parent: temp
          }
          return temp.previous;
        }
        temp = temp.previous;
      }
    }
  }
}

const bt = new binaryThree(4);

for (let count = 0; count < 10; count++) {
  let randomNumer = Math.floor(Math.random() * 50) + 1;
  bt.add(randomNumer);
}

let lessValue = bt.head;
while (true) {
  console.log(lessValue);
  if (!lessValue.next) break;
  lessValue = lessValue.next;
}
