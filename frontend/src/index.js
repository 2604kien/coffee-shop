import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {Provider} from "react-redux"
import { store } from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './components/Error404';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/*" element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
  </Provider>
);
