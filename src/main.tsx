import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./app/store.js";
import { Provider } from "react-redux";

import App from "./App.component";

import "./index.styles.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
