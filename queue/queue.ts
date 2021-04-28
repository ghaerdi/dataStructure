import LinkedList from "../linkedList/linkedList.ts";

type Queue<T> = LinkedList<T>;

const queue: Queue<number> = new LinkedList<number>();

queue.add(0);
queue.add(1);
queue.pop();
