import Buyable from './Buyable';
export default class Book implements Buyable {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly author: string;
    readonly pages: number;
    constructor(id: number, name: string, price: number, author: string, pages: number);
}
//# sourceMappingURL=Book.d.ts.map