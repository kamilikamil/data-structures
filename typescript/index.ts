import { SinglyLinkedList } from "./linkedlist";

const list = new SinglyLinkedList();

list.push(5);
list.push(10);
list.push(20);
list.push(30);

console.dir(list, {depth: Infinity});

list.remove(20);

console.dir(list, {depth: Infinity});