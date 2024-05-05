import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import 'remixicon/fonts/remixicon.css';
import MainLayout from './MainLayout';


const root = createRoot(document.getElementById('app'));
root.render(<MainLayout />);
// ReactDOM.render(<App />, document.getElementById("app"));
