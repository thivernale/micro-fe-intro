import React, { Fragment, useEffect, useState } from 'react';

// @ts-ignore
import { currencyConverter } from 'home/products';
import { cart, clearCart, getCart } from './cart';

export default function MiniCart() {
  const [items, setItems] = useState<any[]>(undefined as any);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    getCart();
    const subscription = cart.subscribe(value => setItems(value?.cartItems));
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!items) {
    return null;
  }

  return (
    <>
      <span onClick={() => setShowCart(!showCart)} id="showcart_span">
        <i className={'ri-shopping-cart-2-fill text-2xl'} id="showcart"></i>
        {items.length}
      </span>
      {showCart && (
        <>
          <div
            className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
            style={{ width: 300, top: '2rem', left: -250 }}
          >
            <div
              className="grid gap-3 text-sm"
              style={{ gridTemplateColumns: '1fr 3fr 10fr 2fr' }}
            >
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
          </div>
        </>
      )}
    </>
  );
}
