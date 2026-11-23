import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    getTotalPrice(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }
    getTotalPriceWithDiscount(discount: number): number {
        const totalPrice = this.getTotalPrice();
        return totalPrice - (totalPrice * discount / 100);
    }
    removeItem(id: number): void {
        this._items = this._items.filter((item) => item.id !== id);
    }

    get items(): Buyable[] {
        return [...this._items];
    }
}