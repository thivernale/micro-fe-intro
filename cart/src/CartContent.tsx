import React, { Fragment, useEffect, useState } from 'react';

// @ts-ignore
import { currencyConverter } from 'home/products';
// @ts-ignore
import { cart, clearCart } from 'cart/cart';
import { BehaviorSubject } from 'rxjs';

export default function CartContent() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    setItems(cart.value?.cartItems ?? []);
    const subscription = (cart as BehaviorSubject<any>).subscribe((value) => {
      setItems(value?.cartItems ?? []);
    });
    return subscription.unsubscribe;
  }, []);

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5">
        {items.map(item => (
          <Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className="max-h-6" />
            <div>{item.name}</div>
            <div className="text-right">
              {currencyConverter.format(item.quantity * item.price)}
            </div>
          </Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right">
          {currencyConverter.format(
            items.reduce((a, v) => a + v.quantity * v.price, 0),
          )}
        </div>
      </div>
      {items.length > 0 && (
        <div className="flex">
          <div className="flex-grow">
            <button
              id="clearcart"
              className="bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className="text-end">
            <button
              id="checkoutcart"
              className="bg-green-900 text-white py-2 px-5 rounded-md text-sm"
              onClick={clearCart}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
