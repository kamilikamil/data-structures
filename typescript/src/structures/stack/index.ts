export class Stack<T> {
  private _list: Array<T> = [];
  private _lastValueAt: number = 0;

  push(value: T) {
    this._list[this._lastValueAt] = value;
    this._lastValueAt++;
  }

  pop() {
    if (this._lastValueAt === 0) {
      return;
    }

    const tempValue: Array<T> = [];

    let index = 0;

    while (index !== this._list.length) {
      if (this._lastValueAt - 1 !== index) {
        tempValue[index] = this._list[index];
      }

      index++;
    }

    this._list = tempValue;
    this._lastValueAt--;
  }

  peek(): T {
    if (this._list.length === 0) {
      return null;
    }

    return this._list[this._lastValueAt - 1];
  }
}
