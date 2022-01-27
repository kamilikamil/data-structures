interface ILinkedinList{
    value: Number,
    next: LinkedinList | null,
    prev: LinkedinList | null
}

class LinkedinList{
    value: Number | null = null;
    next: LinkedinList | null = null;

    constructor(initValues: ILinkedinList){
        const {value, next} = initValues;

        this.value = value || null;
        this.next = next || null;
    }
}

export class SinglyLinkedList {
    private _list: LinkedinList | null = null; // lets make sure we don't mutate this variable directly

    private _mutateList(list: LinkedinList | null){
        this._list = list;
    }

    push(value: Number){
        const linkedinList = new LinkedinList({
            value,
            next: this._list === null ? null : this._list,
            prev: null
        });

        this._mutateList(linkedinList);
    }

    exists(value: Number): boolean{
        if(this._list === null){ // we have an empty linked list
            return false;
        }

        let temp = this._list;
        let found = false;

        while(temp.next !== null && !found){
            if(temp.value === value){
                found = true;
            }

            temp = temp.next;
        }

        return found;
    }

    remove(value: Number){
        if(this._list === null){ // we have an empty linked list
            return;
        }

        let temp = this._list;
        let prev = temp;

        while(temp.next !== null){
            if(value === temp.value){ // we found the item to remove
                prev.next = temp.next;
                this._mutateList(prev);
                break;
            }

            prev = temp; // prev is always one item behind temp, so that we can point to the next item of the found item
            temp = temp.next;
            
        }
    }
}




