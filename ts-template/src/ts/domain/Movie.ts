import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly year: number,
        readonly description: string,
        readonly genre: string,
        readonly price: number,
    ) { }
}
