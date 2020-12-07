import { v4 as uuidv4 } from "uuid";
import _ from 'lodash'

export class Storage {

    items;

    constructor() {
        this.items = [];
    };

    create(item) {
        item.id = uuidv4();
        this.items.push(item);
        return item;
    };

    find(findFunc) {
        const trueItems = this.items.filter(findFunc);
        return trueItems;
    };

    getAll() {
        return this.items;
    };

    remove(findFunc) {
        const falseItems = [];
        for (let i = this.items.length - 1; i >= 0; i--) {
            if (!findFunc(this.items[i])) {
                falseItems.push(this.items[i]);
                this.items.splice(i, 1);
            }
        }
        return falseItems;
    };

    where(whereObj) {
        const objItems = _.filter(this.items, whereObj);
        return objItems;
    }
}