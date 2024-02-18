import React from 'react';
import "./css/index.css"
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Auth0Provider } from '@auth0/auth0-react';
import {Provider} from "react-redux"
import { store } from './store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {disableReactDevTools} from "@fvilers/disable-react-devtools";
import { getConfig } from "./config";
if(process.env.NODE_ENV==='production') disableReactDevTools()
const root = ReactDOM.createRoot(document.getElementById('root'));
const config = getConfig();
const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(config.audience ? { audience: config.audience } : null),
  },
};
root.render(
  <Auth0Provider
  {...providerConfig}
>
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App/>}/>
    </Routes>
    </BrowserRouter>
  </Provider>
  </Auth0Provider>,
);
