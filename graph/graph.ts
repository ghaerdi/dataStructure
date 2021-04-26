interface Element<T> {
  id: number;
  value: T;
  adjacents?: LinkedList<Element<T>>;
  next?: Omit<Element<T>, "id">;
}

interface HashElement<T> {
  [key: string]: Element<T>;
}

// expected: HashTable<Element<T, LinkedList<Element<T>>>> = {
//   1: { value: "test1", adjacents: { 2: "...", 3: "..." }},
//   2: { value: "test2", adjacents: { 4: "..."  }},
//   3: { value: "test3"},
//   4: { value: "test2"}
// }

class Graph<T> {
  public table: HashElement<T>;

  constructor() {
    this.table = {};
  }

  public getElement(id: number): Element<T> {
    return this.table[id];
  }

  public addAEdge(id: number, destination: number) {
    const element: Element<T> = this.table[id];
    const d: Element<T> = this.table[destination];

    if (!d.adjacents) {
      d.adjacents = new LinkedList<Element<T>>();
    }

    d.adjacents.add(element);
  }

  public addElement(id: number, value: T): Element<T> {
    const element: Element<T> = { id, value };
    this.table[id] = element;
    return element;
  }
}

class LinkedList<T> {
  public head: Omit<Element<T>, "id">;

  constructor() {
    this.head = null!;
  }

  public add(value: T): void {
    const element: Omit<Element<T>, "id"> = { value };
    if (this.head) {
      element.next = this.head;
    }

    this.head = element;
  }
}

const graph = new Graph();
graph.addElement(1, "test1");
graph.addElement(2, "test2");
graph.addElement(3, "test3");
graph.addElement(4, "test4");

graph.addAEdge(3, 1);
graph.addAEdge(2, 1);
graph.addAEdge(4, 2);
console.log(graph);
console.log(graph.table[1].adjacents);
console.log(graph.table[2].adjacents);
