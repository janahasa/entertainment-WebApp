import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BookMarkedContextProvider } from "./context/BookMarkedContext";
import { ThemeContext, ThemeContextProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <BookMarkedContextProvider>
      <App />
    </BookMarkedContextProvider>
  </ThemeContextProvider>
);

reportWebVitals();
