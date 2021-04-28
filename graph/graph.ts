import { Element, Node, Map } from "../types.ts";
import LinkedList from "../linkedList/linkedList.ts";

class Graph<T> {
  [key: number]: Element<T>;

  public addEdge(destination: number, id: number) {
    const d: Element<T> = this[destination];
    const element: Element<T> = this[id];
    if (!d || !element) throw "element not found";
    d.adjacents.add(element);
  }

  public addElement(id: number, value: T): Element<T> {
    const adjacents = new LinkedList<Element<T>>();
    this[id] = { id, value, adjacents };
    return this[id];
  }

  public removeElement(id: number) {
    const element: Element<T> = this[id];
  }

  public removeEdge(destination: number, id: number) {
    const d: Element<T> = this[destination];
    const index: number | Node<Element<T>> = d.adjacents.find(this[id]);
    typeof index === "number" && d.adjacents.remove(index)
  }

  public BFSearch(id: number, destination: number): boolean {
    let nextToVisit = new LinkedList<Element<T>>()
    const visited: Map<boolean> = {};
    nextToVisit.add(this[id]);
    while (!nextToVisit.isEmpty()) {
      let element: Element<T> = nextToVisit.pop().value;
      if (element === this[destination]) return true;
      if (visited[element.id]) continue;

      visited[element.id] = true;
      for (let index = 0; index < element.adjacents.length; index++) {
        nextToVisit.add(element.adjacents.get(index).value);
      }
    }
    return false;
  }
}

export default Graph;
