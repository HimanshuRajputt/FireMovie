// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { FirebaseConfig } from "./ContextApi/FirebaseConfig.jsx";

createRoot(document.getElementById("root")).render(
  <FirebaseConfig>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseConfig>
);
