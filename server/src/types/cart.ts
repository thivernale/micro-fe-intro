import products, { Product } from './products';

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  cartItems: CartItem[];
}

const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...products[index],
    quantity: 1,
  })),
});

export const carts: Record<number, Cart> = {
  1: initialCart([0, 2, 4]),
  2: initialCart([1, 3]),
};
