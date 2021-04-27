import LinkedList from "./linkedList/linkedList.ts";

export interface Element<T> {
  id: number;
  value: T;
  adjacents: LinkedList<Element<T>>;
  parent?: Node<T>;
  next?: Node<T>;
  previous?: Node<T>;
}

export type Node<T> = Omit<Element<T>, "id" | "adjacents">

export interface HashElement<T> {
  [key: number]: T;
}
