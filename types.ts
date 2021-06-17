import LinkedList from "./linkedList/linkedList.ts";

export interface Element<Value> {
  id: number;
  value: Value;
  adjacents: LinkedList<Element<Value>>;
  parent?: Node<Value>;
  next?: Node<Value>;
  previous?: Node<Value>;
}

export type Node<Value> = Omit<Element<Value>, "id" | "adjacents">