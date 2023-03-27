import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
);

// reportWebVitals(console.log);