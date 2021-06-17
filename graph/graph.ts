import { Element, Node } from "../types.ts";
import LinkedList from "../linkedList/linkedList.ts";

class Graph<Value> {
  [key: number]: Element<Value>;

  public addEdge(destination: number, id: number) {
    const d: Element<Value> = this[destination];
    const element: Element<Value> = this[id];

    if (!d || !element) throw "element not found";

    d.adjacents.add(element);
  }

  public addElement(id: number, value: Value): Element<Value> {
    const adjacents = new LinkedList<Element<Value>>();

    this[id] = { id, value, adjacents };

    return this[id];
  }

  public removeElement(id: number) {
    delete this[id];
  }

  public removeEdge(destination: number, id: number) {
    const d: Element<Value> = this[destination];
    const index: number | Node<Element<Value>> = d.adjacents.find(this[id]);

    typeof index === "number" && d.adjacents.remove(index)
  }

  public BFSearch(id: number, destination: number): boolean {
    const nextToVisit = new LinkedList<Element<Value>>()
    const visited: Record<number, boolean> = {};

    nextToVisit.add(this[id]);

    while (!nextToVisit.isEmpty()) {
      let element: Element<Value> = nextToVisit.pop().value;

      if (element === this[destination]) return true;
      if (visited[element.id]) continue;

      visited[element.id] = true;

      for (let index = 0; index < element.adjacents.length; index++) {
        let temp: Element<Value> = element.adjacents.get(index).value;
        let exist: boolean = this[temp.id]? true : false;

        if (exist) nextToVisit.add(temp);
        else this[element.id].adjacents.remove(index);
      }
    }
    return false;
  }
}

export default Graph;