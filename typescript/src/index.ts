import { Stack } from "./structures/stack";
import { SinglyLinkedList } from "./structures/linkedlist/single";

const stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);

// console.dir(stack, {depth: Infinity});

// stack.pop();
// stack.pop();
// stack.pop();

// console.log(stack.peek());

// console.dir(stack, {depth: Infinity});

const list = new SinglyLinkedList();

list.insert(5);

list.insert(10);

list.insert(20);

list.insert(30);

console.dir(list, { depth: Infinity });

list.remove(20);

console.dir(list, { depth: Infinity });
