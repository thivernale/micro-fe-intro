import './index.scss';

import Login from 'cart/Login';
import MiniCart from 'cart/MiniCart';

export default function Header() {
  const HOME_URL = 'http://localhost:3000';
  const CART_URL = 'http://localhost:3002';

  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow">
          <a href={HOME_URL}>Header</a>
        </div>
        <div className="flex-end relative flex gap-2">
          <a href={CART_URL}>Cart</a>
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}
