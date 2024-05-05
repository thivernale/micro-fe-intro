import React, { useState } from 'react';
import './index.scss';

import { login, logout, useLoggedIn } from './cart';

export default function Login() {

  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState('sally');
  const [password, setPassword] = useState('123');

  if (loggedIn) {
    return (
      <span title="Logout" onClick={() => logout()}>
        <i className={'ri-logout-box-r-line text-2xl cursor-pointer'} id="logout"></i>
      </span>
    );
  }

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className={'ri-fingerprint-line text-2xl cursor-pointer'} id="showlogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          style={{ width: 300, top: '2rem', left: -250 }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
            onClick={() => login(username, password)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}
