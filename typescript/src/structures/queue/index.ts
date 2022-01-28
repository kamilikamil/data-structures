//Linked list will be a better option here to use for our queue rather than arrays
//since queue is first in first out, we will have to always shift the values left by 1 in the array :(

import { SinglyLinkedList } from "../linkedlist/single";

export class Queue<T> {
  private _queue: SinglyLinkedList<T> = new SinglyLinkedList();
  private _headValue: T | null = null;

  push(value: T) {
    if (this._queue.get() === null) {
      this._headValue = value;
    }

    this._queue.insert(value);
  }

  pop() {
    if (this._headValue === null) {
      return;
    }

    this._queue.remove(this._headValue);

    if (this._queue.get() !== null) {
      //@ts-ignore
      this._headValue = this._queue.get().value;
      return;
    }

    this._headValue = null;
  }

  peek(): T | null {
    return this._headValue;
  }
}
