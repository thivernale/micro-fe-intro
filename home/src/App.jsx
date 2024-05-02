import React from 'react';

import './index.scss';
import Header from './Header';
import Footer from './Footer';
import { createRoot } from 'react-dom/client';

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">Home Page Content</div>
    <Footer />
  </div>
);

const root = createRoot(document.getElementById('app'));
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById("app"));
