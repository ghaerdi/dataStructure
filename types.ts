import LinkedList from "./linkedList/linkedList.ts";

export interface Element<T> {
  id: number;
  value: T;
  adjacents: LinkedList<Element<T>>;
  parent?: Node<T>;
  next?: Node<T>;
  previous?: Node<T>;
}

export interface Map<T> {
  [key: string]: T
}

export type Node<T> = Omit<Element<T>, "id" | "adjacents">
