import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import './index.scss';
import 'remixicon/fonts/remixicon.css';

import Header from 'home/Header';
import Footer from 'home/Footer';
import PDPContent from './PDPContent';

// const HeaderLazy = lazy(() => import('home/Header'));

const App = () => {
  // const [showHeader, setShowHeader] = useState(false);

  return (
    <BrowserRouter>
      <div className="mx-auto max-w-6xl">
        {/*showHeader && (
          <Suspense fallback={<div>Loading...</div>}>
            <HeaderLazy />
          </Suspense>
        )
        <button type="button" className={showHeader ? 'bg-gray-300' : undefined} onClick={() => {
          setShowHeader(!showHeader);
        }}>{showHeader ? 'Hide lazy header ' : 'Show lazy header '}
        </button>*/}
        <Header />
        <div className="my-10">
          <Routes>
            <Route path="/product/:id" element={<PDPContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById("app"));
