import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { repositoryListSlice } from "./slices/repositoryList";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    repositoriesReducer: repositoryListSlice.reducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
