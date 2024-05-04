import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

const API_SERVER = 'http://localhost:8080';

export const jwt = new BehaviorSubject<string>('');

export const login = (username: string, password: string) => {
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
      return data.access_token;
    });
};

export function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);

  useEffect(() => {
    setLoggedIn(!!jwt.value);
    const subscription = jwt.subscribe(_ => {
      setLoggedIn(!!jwt.value);
    });
    return subscription.unsubscribe;
  }, []);

  return loggedIn;
}
