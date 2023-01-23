import React from "react";
import ReactDOM from "react-dom/client";
import App from "page/app";
import GlobalStyle from "styles/global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
