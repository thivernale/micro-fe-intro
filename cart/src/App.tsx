import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import 'remixicon/fonts/remixicon.css';

// @ts-ignore
import Header from 'home/Header';
// @ts-ignore
import Footer from 'home/Footer';
import CartContent from './CartContent';

const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <CartContent />
    </div>
    <Footer />
  </div>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
