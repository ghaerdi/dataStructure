import LinkedList from "../linkedList/linkedList.ts";

type Stack<T> = LinkedList<T> | T[];

const stack: Stack<number> = new LinkedList();

stack.push(0);
stack.push(1);
stack.pop();
