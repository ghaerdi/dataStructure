import { Element, HashElement } from "../types.ts";
import LinkedList from "../linkedList/linkedList.ts";

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
    this[id] = { id, value, adjacents };
    return this[id];
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
