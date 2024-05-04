import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import 'remixicon/fonts/remixicon.css';

import Header from './Header';
import Footer from './Footer';
import HomeContent from './HomeContent';

const App = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("app"));
