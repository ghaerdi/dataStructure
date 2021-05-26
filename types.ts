import LinkedList from "./linkedList/linkedList.ts";

export interface Element<T> {
  id: number;
  value: T;
  adjacents: LinkedList<Element<T>>;
  parent?: Node<T>;
  next?: Node<T>;
  previous?: Node<T>;
}

type Key = string | number
export type CObject<key extends Key, value> = { [K in key]: value}

export type Node<T> = Omit<Element<T>, "id" | "adjacents">