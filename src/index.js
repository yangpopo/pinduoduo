import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store/index";
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
          <App />
      </HashRouter>
    </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();

