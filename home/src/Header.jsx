import './index.scss';

import Login from 'cart/Login';
import MiniCart from 'cart/MiniCart';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex gap-5">
          <Link to="/">Header</Link>
          <div>|</div>
          <Link to="/cart" id="cart">Cart</Link>
        </div>
        <div className="flex-end relative flex gap-2">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}
