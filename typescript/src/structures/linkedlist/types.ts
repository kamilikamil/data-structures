interface ILinkedinList<T> {
  value: T | null;
  next: LinkedinList<T> | null;
  prev: LinkedinList<T> | null;
}

export class LinkedinList<T> {
  value: T | null = null;
  next: LinkedinList<T> | null = null;
  prev: LinkedinList<T> | null = null;

  constructor(initValues: ILinkedinList<T>) {
    const { value, next, prev } = initValues;

    this.value = value || null;
    this.next = next || null;
    this.prev = prev || null;
  }
}
