import React from 'react';
import "./css/index.css"
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {Provider} from "react-redux"
import { store } from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {disableReactDevTools} from "@fvilers/disable-react-devtools";
if(process.env.NODE_ENV==='production') disableReactDevTools()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App/>}/>
    </Routes>
    </BrowserRouter>
  </Provider>
);
