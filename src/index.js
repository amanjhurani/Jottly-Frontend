import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import {HashRouter} from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);
