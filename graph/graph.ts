import { Element } from "../types.ts";
import LinkedList from "../linkedList/linkedList.ts";

class Graph<T> {
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

export default Graph;
