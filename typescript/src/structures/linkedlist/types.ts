interface ILinkedinList<T> {
  value: T;
  next: LinkedinList<T>;
  prev: LinkedinList<T>;
}

export class LinkedinList<T> {
  value: T = null;
  next: LinkedinList<T> = null;
  prev: LinkedinList<T> = null;

  constructor(initValues: ILinkedinList<T>) {
    const { value, next, prev } = initValues;

    this.value = value || null;
    this.next = next || null;
    this.prev = prev || null;
  }
}
