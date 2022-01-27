import { LinkedinList } from "./types";

export class SinglyLinkedList {
  private _list: LinkedinList | null = null; // lets make sure we don't mutate this variable directly

  private _mutateList(list: LinkedinList | null) {
    this._list = list;
  }

  get(): LinkedinList | null {
    return this._list;
  }

  insert(value: Number) {
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

    let tail: LinkedinList | null = this._list;

    while (tail.next != null) {
      tail = tail.next;
    }

    tail.next = linkedinList;
  }

  exists(value: Number): boolean {
    // we have an empty linked list
    if (this._list === null) {
      return false;
    }

    let temp: LinkedinList | null = this._list;
    let found = false;

    while (temp !== null && !found) {
      if (temp.value === value) {
        found = true;
      }

      temp = temp.next;
    }

    return found;
  }

  remove(value: Number) {
    // we have an empty linked list
    if (this._list === null) {
      return;
    }

    let tail: LinkedinList | null = this._list;
    let prev: LinkedinList | null = tail;

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
