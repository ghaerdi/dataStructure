import LinkedList from "../linkedList/linkedList.ts";

type Stack<T> = LinkedList<T> | T[];

export default Stack