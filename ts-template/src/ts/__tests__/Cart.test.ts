import { expect, test } from '@jest/globals';
import Cart from '../service/Cart';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('calculates total price without a discount', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1, 'Album One', 'Artist One', 900));
  cart.add(new MusicAlbum(2, 'Album Two', 'Artist Two', 600));

  expect(cart.getTotalPrice()).toBe(1500);
});

test('returns zero for the total price of an empty cart', () => {
  const cart = new Cart();

  expect(cart.getTotalPrice()).toBe(0);
});

test('calculates total price with a discount', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1, 'Album One', 'Artist One', 900));
  cart.add(new MusicAlbum(2, 'Album Two', 'Artist Two', 600));

  expect(cart.getTotalPriceWithDiscount(10)).toBe(1350);
});

test('removes an item by id', () => {
  const cart = new Cart();
  const album = new MusicAlbum(1, 'Album', 'Artist', 900);
  cart.add(album);

  cart.removeItem(1);

  expect(cart.items).toEqual([]);
});

test('does not remove an item when the id is not in the cart', () => {
  const cart = new Cart();
  const album = new MusicAlbum(1, 'Album', 'Artist', 900);
  cart.add(album);

  cart.removeItem(2);

  expect(cart.items).toEqual([album]);
});
