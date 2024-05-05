import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

const API_SERVER = 'http://localhost:8080';

export const jwt = new BehaviorSubject<string>(localStorage.getItem('jwt') ?? '');
export const cart = new BehaviorSubject<any>(null as any);

export function login(username: string, password: string) {
  fetch(`${API_SERVER}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((data: { access_token: string }) => {
      jwt.next(data.access_token);
      getCart();
      return data.access_token;
    });
}

export function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);

  useEffect(() => {
    setLoggedIn(!!jwt.value);
    const subscription = jwt.subscribe(_ => {
      setLoggedIn(!!jwt.value);
      localStorage.setItem('jwt', jwt.value);
    });
    return subscription.unsubscribe;
  }, []);

  return loggedIn;
}

export function logout() {
  localStorage.removeItem('jwt');
  jwt.next('');
  cart.next([]);
}

export function getCart() {
  fetch(`${API_SERVER}/cart`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${jwt.value}`,
    },
  })
    .then(res => res.json())
    .then((data: any) => {
      cart.next(data);
      return data;
    });
}

export function addToCart(id: string) {
  fetch(`${API_SERVER}/cart`, {
    method: 'POST',
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt.value}`,
    },
  })
    .then(res => res.json())
    .then((data: any) => {
      cart.next(data);
      return data;
    });
}

export function clearCart() {
  fetch(`${API_SERVER}/cart`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${jwt.value}`,
    },
  })
    .then(res => res.json())
    .then((data: any) => {
      cart.next(data);
      return data;
    });
}
