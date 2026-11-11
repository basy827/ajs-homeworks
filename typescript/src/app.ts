import Cart from './cart.js';
const cart = new Cart();

cart.add({
    id: 1,
    name: 'Book 1',
    price: 10,
});

console.log(cart.items);