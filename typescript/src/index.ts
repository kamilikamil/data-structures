import { Stack } from "./structures/stack";

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.dir(stack, {depth: Infinity});


stack.pop();
stack.pop();
stack.pop();

console.log(stack.peek());



console.dir(stack, {depth: Infinity});