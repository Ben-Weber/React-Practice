import React from "react"; // importing React
import ReactDOM from "react-dom"; // important React DOM
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // grabbing div (w/ #root) & inserting our App into that div (this App comes from ./App.js line 4 "which contains the root App Component". App is the Root Component, which everything goes under it)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
