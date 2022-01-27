interface ILinkedinList{
    value: Number,
    next: LinkedinList | null,
    prev: LinkedinList | null
}

export class LinkedinList{
    value: Number | null = null;
    next: LinkedinList | null = null;
    prev: LinkedinList | null = null;

    constructor(initValues: ILinkedinList){
        const {value, next, prev} = initValues;

        this.value = value || null;
        this.next = next || null;
        this.prev = prev || null;
    }
}