import { LinkedinList } from "./types";

export class SinglyLinkedList<T> {
  private _list: LinkedinList<T> = null; // lets make sure we don't mutate this variable directly

  private _mutateList(list: LinkedinList<T>) {
    this._list = list;
  }

  get(): LinkedinList<T> {
    return this._list;
  }

  insert(value: T) {
    const linkedinList = new LinkedinList({
      value,
      next: null,
      prev: null,
    });

    // we have an empty linked list
    if (this._list === null) {
      this._mutateList(linkedinList);
      return;
    }

    let tail: LinkedinList<T> = this._list; //this is a shallow copy (any changes being made to tail will be reflected in _list) :) :)

    while (tail.next != null) {
      tail = tail.next;
    }

    tail.next = linkedinList;
  }

  exists(value: T): boolean {
    // we have an empty linked list
    if (this._list === null) {
      return false;
    }

    let temp: LinkedinList<T> = this._list;
    let found = false;

    while (temp !== null && !found) {
      if (temp.value === value) {
        found = true;
      }

      temp = temp.next;
    }

    return found;
  }

  remove(value: T) {
    // we have an empty linked list
    if (this._list === null) {
      return;
    }

    if (value === this._list.value) {
      this._mutateList(this._list.next); // we have to remove the head, so mutating the list to be the next item instead
    }

    let tail: LinkedinList<T> = this._list; //this is a shallow copy (any changes being made to tail will be reflected in _list) :)
    let prev: LinkedinList<T> = this._list; //this is a shallow copy (any changes being made to prev will be reflected in _list) :)

    while (tail !== null) {
      // we found the item to remove
      if (value === tail.value) {
        let temp = tail.next;
        prev.next = temp;
        break;
      }

      prev = tail; // prev is always one item behind tail, so that we can point to the next item of the found item
      tail = tail.next;
    }
  }
}
