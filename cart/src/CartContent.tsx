import React, { useEffect, useState } from 'react';

import { jwt } from './cart';
import Login from './Login';
import MiniCart from './MiniCart';

export default function CartContent() {

  const [token, setToken] = useState('');

  useEffect(() => {
    const subscription = jwt.subscribe(setToken);
    return subscription.unsubscribe;
  }, []);

  return (
    <div>
      <Login />
      <MiniCart />
      Token: {token}
    </div>
  );
}
