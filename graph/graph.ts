interface Element<T> {
  id: number;
  value: T;
  adjacents: LinkedList<Element<T>>;
  next?: Node<T>;
  previous?: Node<T> 
}

type Node<T> = Omit<Element<T>, "id" | "adjacents">

interface HashElement<T> {
  [key: number]: T;
}

class Graph<T> implements HashElement<Element<T>> {
  [key: number]: Element<T>;

  public getElement(id: number): Element<T> {
    return this[id];
  }

  public addAEdge(destination: number, id: number) {
    const d: Element<T> = this[destination];

    const element: Element<T> = this[id];

    d.adjacents.add(element);
  }

  public addElement(id: number, value: T): Element<T> {
    const adjacents = new LinkedList<Element<T>>();
    const element: Element<T> = { id, value, adjacents };
    this[id] = element;
    return element;
  }
}

class LinkedList<T> {
  public head: Node<T> | undefined;

  public add(value: T): void {
    const element: Node<T> = { value };
    if (this.head) {
      element.next = this.head;
    }

    this.head = element;
  }
}

const graph = new Graph<string>();
graph.addElement(1, "test1");
graph.addElement(2, "test2");
graph.addElement(3, "test3");
graph.addElement(4, "test4");

graph.addAEdge(1, 2);
graph.addAEdge(1, 3);
graph.addAEdge(2, 4);
console.log(graph);
console.log(graph[1].adjacents);
console.log(graph[2].adjacents);
