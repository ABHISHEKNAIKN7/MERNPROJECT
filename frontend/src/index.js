import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserAuthContextProvider>
        <App />
      </UserAuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
