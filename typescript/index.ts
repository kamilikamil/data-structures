import { SinglyLinkedList } from "./linkedlist";

const list = new SinglyLinkedList();

list.insert(5);
list.insert(10);
list.insert(20);
list.insert(30);

console.dir(list, {depth: Infinity});

list.remove(20);

console.dir(list, {depth: Infinity});