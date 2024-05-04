import React, { useEffect, useState } from 'react';

import { jwt } from './cart';
import Login from './Login';

export default function CartContent() {

  const [token, setToken] = useState('');

  useEffect(() => {
    //login('sally', '123');

    const subscription = jwt.subscribe(setToken);

    return subscription.unsubscribe;
  }, []);

  return (
    <div>
      Token: {token}
      <Login />
    </div>
  );
}
