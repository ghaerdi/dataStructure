import LinkedList from "../linkedList/linkedList.ts";

type Stack<Value> = LinkedList<Value> | Value[];

export default Stack