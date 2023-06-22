import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Suspense>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Suspense>
);

/* Alteramos o <React.StrictMode> para <React.Suspense>, pois a primeira está apresentando erros 
de dupla renderização do próprio React, no ambiente de produção */
