import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./Context/ShopContext.jsx";
import { AuthProvider } from "./Context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ShopContextProvider>
  </React.StrictMode>
);
