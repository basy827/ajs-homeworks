import type Buyable from './Buyable.js';
export default class Book implements Buyable {

    constructor(
        readonly id: number, 
        readonly name: string, 
        readonly price: number, 
        readonly author: string, 
        readonly pages: number) {
    }
}   