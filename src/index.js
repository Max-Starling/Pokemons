import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import configurateStore from './resources/store';
import App from "./App.js";

const defaultStore = {};

const { store } = configurateStore(defaultStore);

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppContainer />, document.getElementById("root"));